module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  collectCoverageFrom: ['<rootDir>/packages/ui/src/**/*.(vue|js)', '!<rootDir>/node_modules/**'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  moduleNameMapper: {
    '^@ui/(.*)$': '<rootDir>/packages/ui/src/$1',
  },
}
