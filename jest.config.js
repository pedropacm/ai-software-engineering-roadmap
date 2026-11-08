module.exports = {
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\.js$': '<rootDir>/jest-transform.js'
  }
};