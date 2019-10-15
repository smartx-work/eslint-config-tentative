
module.exports = {
    extends: [ 'standard', 'plugin:vue/recommended' ],
    rules: {
        ...require('./rules/basic'),
        ...require('./rules/standard'),
        ...require('./rules/vue'),
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
}
