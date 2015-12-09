define(function(require, exports, module) {
    var demo2 = require('./demo2');
    module.exports = {
        start: function() {
            demo2.start()
        }
    };
});