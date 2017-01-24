

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'tslint-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: []
};
