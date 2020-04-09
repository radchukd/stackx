module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  rootDir: `${process.argv[2]}`,
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.test.ts',
  ],
};
