
module.exports = {
    extends: ['standard', 'plugin:vue/essential'],
    rules: {
        ...require('./rules/basic'),
        ...require('./rules/vue'),
    },
}
