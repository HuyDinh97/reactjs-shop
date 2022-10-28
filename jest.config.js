module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['node_modules/(?!uuid)/'],

  modulePathIgnorePatterns: [
    '<rootDir>/build',
  ],
  moduleDirectories: ['node_modules', 'src'],

  testEnvironment: 'jest-environment-jsdom',
  testResultsProcessor: 'jest-sonar-reporter',

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  maxWorkers: 2,
};
