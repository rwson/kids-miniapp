const path = require('path');

const isLess = (file) => /.less$/.test(path.extname(file));

const isJs = (file) => /.js$/.test(path.extname(file));

const isKmp = (file) => /.kmp$/.test(path.extname(file));