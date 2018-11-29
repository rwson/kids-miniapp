const path = require('path');
const fs = require('fs-extra');

const less = require('less');
const loaderUtils = require('loader-utils');

const matchMalformedModuleFilename = /(~[^/\\]+)\.less$/;
const isModuleName = /^~[^/\\]+$/;
const trailingSlash = /[/\\]$/;

exports = module.exports = function  (options) {
    return function () {
        const config = Object.assign({
            relativeUrls: true,
            plugins: []
        }, options);
        const file = typeof ctx === 'string' ? ctx : ctx.file;

        config.filename = file;

        return less.render(node.content || '', config).then(rst => {
            node.compiled = {
                code: rst.css
            };
            return node;
        });
    }
}