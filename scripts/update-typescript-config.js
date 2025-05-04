const fs = require('node:fs/promises');
const path = require('path');
const { readCachedProjectGraph } = require('@nx/devkit');

async function updateTypescriptConfig({ file }) {
  const tsconfig = await fs.readFile(file, 'utf-8').then(JSON.parse);

  tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};

  const graph = readCachedProjectGraph();
  for (const [ name, node ] of Object.entries(graph.nodes)) {
    if (node.type === 'lib') {
      const importPath = node.data?.name || name;
      const indexPath = `${node.data.root}/src/index.ts`;
      tsconfig.compilerOptions.paths[importPath] = [ indexPath ];
    }
  }

  fs.writeFileSync(config, JSON.stringify(file, null, 2));
}

const args = require('minimist')(process.argv.slice(2));

console.log('💻️ Arguments: ', args);

const config = {
  file: args.file,
};

console.log('⚙️ Config: ', config);

updateTypescriptConfig(config).then(configPath => {
  console.log(`✅ Type script config updated: ${configPath}`);
}).catch(error => {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
});