var fs = require('fs-extra');
var path = require('path');
const logger = require('./logger');

const fileCollections = [];

/**
 * 遍历所有字目录
 */
function dirWalker(filePath) {
    fs.readdir(filePath, (err, files) => {
        if (err) {
            logger.fatal(err);
        } else {
            files.forEach((filename) => {
                const filedir = path.join(filePath, filename);
                fs.stat(filedir, (eror, stats) => {
                    if (eror) {
                        logger.fatal(new Error('获取文件stats失败'));
                    } else {
                        const isFile = stats.isFile();
                        const isDir = stats.isDirectory();
                        if (isFile) {
                            fileCollections.push(filedir);
                            console.log(filedir);
                        }
                        if (isDir) {
                            dirWalker(filedir);
                        }
                    }
                })
            });
        }
    });
    return fileCollections;
};

module.exports = exports = dirWalker;
