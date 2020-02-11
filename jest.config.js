module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  verbose: false,
  globals: {
    NODE_ENV: 'test',
  },
};
