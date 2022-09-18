const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
  },
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['cobertura'],
  collectCoverageFrom: [
    '<rootDir>/src/@(components|utils)/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!.jest/**',
    '!**/node_modules/**',
  ],
};

module.exports = createJestConfig(config);
