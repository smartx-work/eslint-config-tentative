module.exports = {
    extends: [ 'standard' ],
    rules: {
        ...require('./rules/basic'),
        ...require('./rules/standard'),
    },
}
