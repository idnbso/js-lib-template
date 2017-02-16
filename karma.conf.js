let webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        autoWatch: true,
        port: 9000,
        frameworks: ['jasmine'],
        files: [
            'test/**/*.test.js'
        ],
        preprocessors: {
            'test/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress'],
        client: {
            jasmine: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};