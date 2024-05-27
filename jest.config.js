export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(robot-test-methods)/)',
  ],
};
