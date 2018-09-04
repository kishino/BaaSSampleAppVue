module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'vue',
    'plugin:vue/recommended',
    'airbnb-base'
  ],
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.prod.config.js'
      }
    }
  },
  rules: {
    'no-param-reassign': 0,
    'no-new': 0,
    'no-console': 0
  }
};
