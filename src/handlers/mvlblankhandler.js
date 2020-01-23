const MVTools = require('mvtools');

class MVLBlankHandler {
    config = {};
    defaults = {};

    constructor (...config) {
        this.MT = new MVTools;
        this.loadConfig(...config);
    }

    loadConfig (...config) {
        this.config = this.MT.mergeRecursive(this.defaults, this.config, ...config);
    }

    init () {}

    initFinish () {}
}

module.exports = MVLBlankHandler;