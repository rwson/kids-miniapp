const path = require('path');
const dirWalker = require('./util/dir-walker');

const basePath = process.cwd();

const config = require(path.join(basePath, 'kids-miniapp.config'));
const files = dirWalker(path.join(basePath, 'src'));

const sourceFiles = {
    images: [],
    javascripts: [],
    less: [],
    pages: [],
    components: []
};

for (const file of files) {
    
}

console.log(config, sourceFiles);
