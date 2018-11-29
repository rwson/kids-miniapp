const plugins = {
    complieJs: false,
    complieLess: false
};

module.exports = exports = function(name, plugin, options) {

    plugins[name] = {
        plugin,
        options
    };

}; 