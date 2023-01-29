const Jdenticon = require("jdenticon");
const { RawSource } = require("webpack-sources");


class FavIconPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync("FavIconPlugin", (compilation, callback) => {
            const { alphabet, size, output } = this.options;

            const buffer = Jdenticon.toPng(alphabet, size);
            const source = new RawSource(buffer)
            compilation.assets[output] = source;
            callback();
        })
    }
}

module.exports = FavIconPlugin