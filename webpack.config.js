module.exports = {
    target: 'node',
    module: {
        rules: [
            { test: /\.js$/, use: 'shebang-loader' },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.csv$/,
                loader: 'csv-loader',
                options: {
                    dynamicTyping: true,
                    skipEmptyLines: true
                }
            }
        ]
    }
};