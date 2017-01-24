

module.exports = function(tsconfig) {
    return {
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            configFileName: tsconfig
                        }
                    }, 'tslint-loader'],
                    exclude: /node_modules/
                }
            ]
        },

        plugins: []
    };
};

