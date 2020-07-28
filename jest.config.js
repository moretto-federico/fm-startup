module.exports = {
  verbose: true,
  globals: {
    NODE_ENV: 'test',
  },
  setupFiles: [
    '<rootDir>/test-shim.js',
    '<rootDir>/test-setup.js'
  ],
  setupFilesAfterEnv: [
    './test/jest.remove.warn.react.lt19.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/test/**/*test.(ts|tsx|js|jsx)'
  ]
};
