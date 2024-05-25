export default {
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.json' }],
  }
};
