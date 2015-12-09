(function() {

    // seajs配置（打包和运行时共用）
    var config = {

        alias: {
            'seajs-debug': 'seajs/seajs-debug/1.1.1/seajs-debug',
            '$': 'jquery/jquery/1.9.1/jquery',
            '$-debug': 'jquery/jquery/1.9.1/jquery',
            'jquery': 'jquery/jquery/1.9.1/jquery',
            'jquery-debug': 'jquery/jquery/1.9.1/jquery-debug'
        },
        crossorigin: true,
        comboSyntax: ['??', ','],
        comboMaxLength: 1000,
        paths: {},
        preload: [],
        charset: 'utf-8',
        timeout: 1000,
        debug: true
    };

    // 仅限浏览器时使用
    if (typeof seajs !== 'undefined') {

        var cdnHost = '/dist'
        // 路径前缀定义
        config.paths = {
            'gallery': 'https://a.alipayobjects.com/gallery',
            'arale': 'https://a.alipayobjects.com/arale',
            'alipay': 'https://a.alipayobjects.com/alipay',
            'platform': cdnHost + '/platform',
        };
        seajs.config(config);
    }

    // 兼容cmd规范
    if (typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = config;
        });
    }

    return config;
})();