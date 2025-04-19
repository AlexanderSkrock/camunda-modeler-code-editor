const Arborist = require('@npmcli/arborist');
const packlist = require('npm-packlist');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

function processFileName(fileName, { name, version }) {
  const sanitizedPackageName = name.replace('@', '').replace('/', '-');
  return fileName
    .replace('#{packageName}', sanitizedPackageName)
    .replace('#{packageVersion}', version);
}

async function packProjectAsZip({ source, destination, fileName }) {
  const packageJsonPath = path.resolve(source, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`No package.json found in ${source}`);
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const packageJson = require(packageJsonPath);
  const packName = processFileName(fileName, packageJson);
  const packPath = path.join(destination, `${packName}.zip`);

  const zipOutput = fs.createWriteStream(packPath);
  const archiveFile = archiver('zip');
  archiveFile.pipe(zipOutput);

  const packageTree = await new Arborist({ path: source }).loadActual();
  const files = await packlist(packageTree);
  files.forEach(file => archiveFile.file(path.join(source, file), { name: file }));

  await archiveFile.finalize();

  return packPath;
}

const args = require('minimist')(process.argv.slice(2));

console.log('💻️ Arguments: ', args);

const config = {
  source: args.source || process.cwd(),
  destination: args.destination || process.cwd(),
  fileName: args['file-name'] || '#{packageName}-#{packageVersion}',
};

console.log('⚙️ Config: ', config);

packProjectAsZip(config).then(packPath => {
  console.log(`✅ Package created: ${packPath}`);
}).catch(error => {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
});
