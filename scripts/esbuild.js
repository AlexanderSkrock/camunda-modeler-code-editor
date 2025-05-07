/**
 * This little script does nothing else than mimicking the nx esbuild executor.
 * The only difference is to allow "iife" as format which we need to bundle plugins.
 * Otherwise the Camunda Modeler or electron will fail to load these.
 * As soon as the official esbuild executor supports a compatible format this script
 * can be removed in favor of the executor.
 */
const esbuild = require('esbuild');
const { resolve } = require('node:path');

const rebuildLoggerPlugin = {
  name: 'rebuild-logger',
  setup(build) {
    build.onStart(() => {
      console.log('🔄 Rebuilding...');
    });
    build.onEnd(result => {
      console.log('✅ Rebuild complete:', new Date().toLocaleTimeString());
    });
  }
};

const args = require('minimist')(process.argv.slice(2));
console.log('💻️ Arguments: ', args);

const { bundle, esbuildConfig, main, outputPath, outputFileName, tsConfig, watch, _, ...standardArgs } = args;
const esbuildConfigPath = resolve(process.cwd(), esbuildConfig);

const esBuildConfigFromArgs = {
  ...require(esbuildConfigPath),
  bundle: !!bundle,
  entryPoints: [ resolve(main) ],
  outfile: resolve(outputPath, outputFileName),
  tsconfig: tsConfig,
  ...standardArgs,
};

const finalConfig = {
  ...esBuildConfigFromArgs,
  plugins: esBuildConfigFromArgs.plugins ? [ ...esBuildConfigFromArgs.plugins, rebuildLoggerPlugin ] : [ rebuildLoggerPlugin ],
  ...standardArgs,
};
console.log('⚙️ Config: ', finalConfig);

(async () => {
  const ctx = await esbuild.context(finalConfig);

  if (watch) {
    await ctx.watch();
    console.log('👀 Watching for changes...');
    await new Promise(() => {});
  } else {
    await ctx.rebuild();
    console.log('✅ Build succeeded at', new Date().toLocaleTimeString());
    await ctx.dispose();
  }
})();