module.exports = {
  env: {
    commonjs: true,
    es6: true
  },
  extends: [
    ...require('./vue').extends
  ],
  globals: {

  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    ...require('./vue').rules,
  }
}