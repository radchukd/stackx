const rootDir = process.argv[2]; // ./server || ./client

module.exports = {
  rootDir,
  preset: 'ts-jest',
  testEnvironment: rootDir === './server' ? 'node' : 'jsdom',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.test.{ts,tsx}',
  ],
};
