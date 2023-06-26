/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['src/_daisyui'],
  testTimeout: 10000,
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
};
