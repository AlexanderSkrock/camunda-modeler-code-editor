/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
  },
};

module.exports = config;