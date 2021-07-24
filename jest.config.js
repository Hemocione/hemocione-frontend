module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '.next/', 'jest.config.js'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
}
