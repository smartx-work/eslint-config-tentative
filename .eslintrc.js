module.exports = {
  env: {
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {

  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    ...require('./rules/basic')
  }
}
