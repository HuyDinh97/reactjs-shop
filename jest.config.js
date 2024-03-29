module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['node_modules/(?!uuid)/'],

  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>src/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|png|jpg|jpeg)$': '<rootDir>src/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>src/__mocks__/svgrMock.js',
  },

  setupFilesAfterEnv: ['<rootDir>src/setupTest.js'],

  testEnvironment: 'jest-environment-jsdom',
  testResultsProcessor: 'jest-sonar-reporter',

  testPathIgnorePatterns: ['/node_modules/'],

  maxWorkers: 2,
};
