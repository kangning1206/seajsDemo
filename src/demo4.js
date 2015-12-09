define(function(require, exports, module) {
    var demo2 = require('demo2');
    console.log(module.id); 
    module.exports = {
        init: function() {
            demo2.start()
        }
    };
});