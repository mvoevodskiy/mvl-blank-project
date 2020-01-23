const MVTools = require('mvtools');

class MVLBlankSemis {
    static exportConfig = {
        ext: {
            classes: {
                semis: {},
                controllers: {},
                handlers: {},
            },
            configs: {
                controllers: {},
                handlers: {
                    DBHandler: {
                        sequelize: {},
                        models: {
                            // MVLExampleModel: require('./models/mvlblankexample'),
                        }
                    }
                },
                semis: {},
            }
        },
        db: {},
    };

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

module.exports = MVLBlankSemis;