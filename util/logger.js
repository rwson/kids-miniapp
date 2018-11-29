const Signale = require('signale').Signale;

const options = {
    types: {
      error: {
        badge: '',
        label: '错误'
      },
      success: {
        badge: '',
        label: '成功'
      },
      warn: {
        badge: '',
        color: 'red',
        label: '警告'
      }
    }
};

module.exports = exports = new Signale(options);
