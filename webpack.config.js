module.exports = {
    target: 'node',
    module: {
        rules: [
            { test: /\.js$/, use: 'shebang-loader' }
        ]
    }
};