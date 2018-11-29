const path = require('path');

module.exports = {
    plugins: [
        {
            name: 'babel',
            enable: true,
            options: {
                asyncawait: true,
                decorator: true
            }
        },
        {
            name: 'imagemin',
            enable: true
        }
    ],
    alias: {
        '@config': path.resolve(__dirname, 'src/config'),
        '@util': path.resolve(__dirname, 'src/util')
    }
};