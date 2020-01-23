const MVTools = require('mvtools');

class MVLBlankController {
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

module.exports = MVLBlankController;