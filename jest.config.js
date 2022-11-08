module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],

  transformIgnorePatterns: ['node_modules/(?!uuid)/'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest', // if you have jsx tests too
  },
  globals: {
    'ts-jest': {
      tsConfig: ' pathToYourTsConfigFile',
    },
  },
  // eslint-disable-next-line no-dupe-keys
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$'],

  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>src/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|png)$': '<rootDir>src/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>src/__mocks__/svgrMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  testResultsProcessor: 'jest-sonar-reporter',

  testPathIgnorePatterns: ['/node_modules/'],

  maxWorkers: 2,
};
