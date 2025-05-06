const { existsSync } = require('node:fs');
const { readFile, writeFile } = require('node:fs/promises');
const { join } = require('node:path');
const { createProjectGraphAsync, readCachedProjectGraph, workspaceRoot } = require('@nx/devkit');

function formatPath(path) {
  let formatted = path.replace(/\\/g, '/');
  if (!formatted.startsWith('.')) {
    formatted = './' + formatted;
  }
  return formatted;
}

async function readProjectGraph() {
  try {
    return readCachedProjectGraph();
  } catch (e) {
    await createProjectGraphAsync();
    return readCachedProjectGraph();
  }
}

async function updateTypescriptConfig({ file }) {
  const tsconfig = await readFile(file, 'utf-8').then(JSON.parse);

  tsconfig.compilerOptions = tsconfig.compilerOptions || {};
  tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};

  const graph = await readProjectGraph();
  Object.entries(graph.nodes).forEach(([ name, node ]) => {
    const projectName = node.data.name || name;
    if (node.data.projectType !== 'library' || !node.data.sourceRoot) {
      console.log(`⏭️  Skipping: ${name}`);
      return;
    }

    const entryCandidates = [ 'index.ts', 'index.js' ].map(entryFile => join(node.data.sourceRoot, entryFile));
    const resolvedEntry = entryCandidates.find(existsSync);
    if (resolvedEntry) {
      console.log(`👀 Detected: ${projectName} => ${resolvedEntry}`);
      tsconfig.compilerOptions.paths[projectName] = [ formatPath(resolvedEntry) ];
    } else {
      console.log(`🚫👀 None of the following entries found: ${entryCandidates}`);
    }
  });

  await writeFile(file, JSON.stringify(tsconfig, null, 2));
  return file;
}

const args = require('minimist')(process.argv.slice(2));

console.log('💻️ Arguments: ', args);

const config = {
  workspace: workspaceRoot,
  file: args.file,
};

console.log('⚙️  Config: ', config);

updateTypescriptConfig(config).then(configPath => {
  console.log(`✅ Type script config updated: ${configPath}`);
}).catch(error => {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
});