const { OFF } = require('../constants/severity.cjs');

const overrides = [
    {
        files: ['**/*.mdx'],
        extends: ['plugin:mdx/recommended'],
        rules: {
            'no-unused-vars': [OFF],
            'import/no-extraneous-dependencies': [OFF],
        },
    },
];

module.exports = overrides;
