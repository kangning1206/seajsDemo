title: seajs
speaker: 张顺
url: https://github.com/kangning1206/seajsDemo/
transition: cards
theme: moon
files: /src/js/demo.js,/src/css/demo.css

[slide]

# seajs-基础教程
## 平台技术部-前端开发(张顺)



[slide]
## iframe效果
----
<iframe data-src="http://127.0.0.1:8080/demo1.htm" src="about:blank;"></iframe>


[slide]
## html代码
----

```html
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"/>
        <meta name="data-spm" content=""/>
        <title>demo1</title>
        <!-- S GLOBAL CSS -->
        <!-- E GLOBAL CSS -->
        <!-- S GLOBAL JS -->
        <script src="https://a.alipayobjects.com/??seajs/seajs/2.2.3/sea.js,seajs/seajs-combo/1.0.0/seajs-combo.js,seajs/seajs-text/1.0.2/seajs-text.js,seajs/seajs-style/1.0.2/seajs-style.js,seajs/seajs-log/1.0.0/seajs-log.js,gallery/json/1.0.3/json.js"></script>
        <!-- E GLOBAL JS -->
    </head>
    <body>
        <div id="demo1"></div>
        <script type="text/javascript">
        /*
            seajs是全局对象，提供了use方法，参数1是模块数组，参数2是模块实例回调;
            次处无定义模块，仅说明use方法的使用;
         */
        seajs.use([], function() {
             window.setInterval(function() {
                 document.getElementById("demo1").innerText = '我每秒会变更一次，随机数:' + Math.floor(Math.random() * 100);
             }, 1000);
         });
        </script>
    </body>
</html>
```

[slide]

## seajs 是什么?

seajs 是一个遵循`CommonJS规范`的JavaScript`模块加载`框架，可以实现JavaScript的模块化开发及加载机制


[slide]

## 为什么选择 seajs

----
* seajs 追求简单、自然的`代码书写`和`组织方式`，遵循 CommonJS 规范 {:&.rollIn}
* 解决`文件依赖`，配置简单清晰，关注模块代码本身实现，提供简单、极致的模块化开发体验
* 模块真正的`可复用`
* `职责`仅`模块加载`，可运行在任何浏览器引擎上，比如移动端
* 遵循MIT 协议，无论个人还是公司，都可以`免费`自由使用
* 提供常用插件，有助于开发调试和性能优化，并具有丰富的可扩展接口
* 丰富业务 ui 组件[arale](http://aralejs.org/)以及 alinw 组件


[slide]

## 目录结构

```html
examples/
  |-- dist              存放 build 后文件目录
  |-- sea-modules       存放 seajs、jquery 等文件，这也是模块的部署目录
  |-- src               存放各个项目的 js、css 文件
  |     |-- home.js
  |     |-- list.js
  |     `-- common
  |-- app               存放 html 等文件
  |     |-- home.htm
  |     |-- list.htm
  |     `-- demo.htm
  `-- package.json
        
```

[slide]

## 项目目录

```html
examples/
  |-- dist              存放 build 后文件目录
  |-- sea-modules       存放 seajs、jquery 等文件，这也是依赖的外部模块目录
  |-- src               存放各个项目的 js、css 文件
  |     |-- css         存放 css 文件目录  
  |     |-- i18n        存放 i18n 国际化文件目录
  |     |-- iconfont    存放 iconfont 资源目录
  |     `-- modules     存放 模块 js 目录      
  |         |-- home
  |         |   `-- index.js
  |         |-- list
  |         |    `-- index.js
  |         `-- demo
  |             `-- index.js
  |     |-- config.js
  |-- app              存放 html 等文件
  |     |-- home.htm
  |     |-- list.htm
  |     `-- demo.htm
  `-- package.json
```
请按 [N] 键盘
[note]
* 项目目录是我们建议目录
* i18n是项目全局语言包地址，也可以考虑每个模块定义自己的i18n
* config.js 是seajs全局静态配置文件，动态的配置请在vm 页面完成
[/note]

[slide]

## 组成部分与执行过程


----
[实例](http://127.0.0.1:8080/demo2.htm) githubDemo

* seajs 框架和插件文件，引入 cdn 资源 {:&.rollIn}
* 运行环境配置，配置paths、alias、语言、combo等
* 模块定义，定义页面功能模块和公共模块
* seajs.use 方法启动加载运行模块

```
// seajs是全局变量，提供的 use 方法可以理解成C语言 main 函数，
//是个入口方法，一个页面至少需要一个seajs.use方法，但我们也不有对于1个的use方法，会出现意想不到奇怪问题；

seajs.use(['platform/seajsDemo/0.0.1/foo'], function(foo) {
    foo.start();
});
```

[slide]

## html代码

```html
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"/>
        <meta name="data-spm" content=""/>
        <title>demo2</title>
        <!-- S GLOBAL CSS -->
        <!-- E GLOBAL CSS -->
        <!-- S GLOBAL JS -->
        <script src="https://a.alipayobjects.com/??seajs/seajs/2.2.3/sea.js,seajs/seajs-combo/1.0.0/seajs-combo.js,seajs/seajs-text/1.0.2/seajs-text.js,seajs/seajs-style/1.0.2/seajs-style.js,seajs/seajs-log/1.0.0/seajs-log.js,gallery/json/1.0.3/json.js"></script>
        <!-- E GLOBAL JS -->
    </head>
    <body>
        <div id="demo2"></div>

        <button id="bt">慢一点100毫秒</button>

        <script type="text/javascript">
        /*
            次处使用了模块demo2，具体实现在demo2中，使用了实例方法start方法启动交互;
         */
        seajs.use(['./src/demo2'], function(demo2) {
            demo2.start();
         });
        </script>
    </body>
</html>
```

[slide]

## 模块代码

```javascript
define(function(require, exports, module) {

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
```
[slide]

## CMD 模块定义规范

> 使用 define 定义模块，define原型很多，但只要记住下边的即可，注意下边这个是src开发阶段模块定义；

```javascript
define(function(require, exports, module) {
    var $ = require('$');
    // 正确写法
    module.exports = {
        foo: 'bar',
        doSomething: function() {}
    };
});

```

> build 后代码,注意参数1 是表识ID

```javascript
define("platform/seajsDemo/0.0.1/demo", ["jquery/jquery/1.9.1/jquery"], function(require, exports, module) {
    require("jquery/jquery/1.9.1/jquery");
    module.exports = {
        foo: "bar",
        doSomething: function() {}
    }
});
```
[slide]

# 常见问题
* 模块的对应的js加载了，为什么代码没运行？
> 问题分析: seajs 是按照模块标识加载了，这里是标识错误，但标识对应的js路径正确，因此加载了，但标识错误，无法识别，所以没有运行;
* 仅require 模块，还没有初始化模块或者实例，但模块已经运行了;
> 问题分析: require 一个模块时，模块内部代码会逐行执行，正确的做法是对外暴漏方法，由外部使用者主动调用，同事内部过程不应该出现过程代码;
* 调试过程中 chrome 中正常，ie出部分区域div没有渲染，但ie没有任何错误提醒，诡异问题;
> 问题分析: 注意下模块中是否有 require('foo.css')，当一个也没有超过32个require css时，ie内部报错，超过加载个数，建议在外部css文件合并模块css,模块中不使用require('foo.css');
* jquery 插件已转化为seajs模块方法，项目模块中也requre 了jquery 插件模块，但$下没有插件？
> 第一请确保正确转化，第二是可能项目在也没引入了另外一个jquery，后边的jquery将已经挂载好的jquery给重置了，一般是第二种造成的

[slide]

## 资源
* 官网 http://seajs.org/docs/#docs
* demo https://github.com/kangning1206/seajsDemo/



