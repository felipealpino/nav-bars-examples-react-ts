const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@components': path.resolve(__dirname, 'src/shared/components'),
        },
    };
    return config;
};