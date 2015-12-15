define(function(require, exports, module) {
    var demo2 = require('demo2');
    console.log(module.id);
    var mymath = require('./mymath');
    console.log(mymath.add(20, 30))
    module.exports = {
        init: function() {
            demo2.start()
        }
    };
});