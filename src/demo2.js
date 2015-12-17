define(function(require, exports, module) {
    require('./demo')
    //模块实现代码
    var tid = 0;
    var demo2 = {
        speed: 1000,
        start: function() {
            var me = this;
            clearInterval(tid);
            tid = window.setInterval(function() {
                console.log(me.speed)
                document.getElementById("demo2").innerText = '我每秒会变更一次，随机数:' + Math.floor(Math.random() * 100);
            }, me.speed);
        }
    }

    document.getElementById('bt').addEventListener('click', function() {
        demo2.speed = demo2.speed + 100;
        demo2.start();
    }, false);

    //将对象暴漏给外部
    module.exports = demo2;
});