/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
};

module.exports = config;