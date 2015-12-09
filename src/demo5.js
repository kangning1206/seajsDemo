define(function(require, exports, module) {
    var demo2 = require('demo2');
    console.log(module.id); 
    var Tip = require('tip');

    module.exports = {
        init: function() {
            demo2.start()
        }
    };
});