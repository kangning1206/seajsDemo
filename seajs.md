title: seajs
speaker: 张顺
url: https://github.com/kangning1206/seajsDemo/
transition: cards
theme: moon
files: /src/js/demo.js,/src/css/demo.css

[slide]

# seajs-基础教程
## 平台技术部-前端开发(2015/12/15)



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
        <style type="text/css">
        #demo1{
            color: red;
            font-size: 32px;
        }
        </style>
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

# seajs 是什么?

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
seajs 是一个模块加载器，模块加载器需要实现两个基本功能：
* 实现模块定义规范，这是模块系统的基础 {:&.rollIn}
* 模块系统的启动与运行

过程[实例](http://127.0.0.1:8080/demo2.htm) githubDemo
* seajs 框架和插件文件，引入 cdn 资源 {:&.rollIn}
* 运行环境配置，配置paths、alias、语言、combo等
* 模块定义，定义页面功能模块和公共模块
* seajs.use 方法启动加载运行模块

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
module.exports 才是提供给外部使用，其他变量和对象都是内部使用；
次数涉及到4个define，require，exports，module，使用 define 定义模块，require引用其他模块，
exports和module输出模块功能

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

> build 后代码,参数1 是`表识ID`，参数2是依赖数组，参数3是模块实现

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

## 模块加载

----
seajs 是一个模块加载器，模块加载器需要实现两个基本功能：

* 实现模块定义规范，这是模块系统的基础；
* 模块系统的启动与运行；
* `seajs.use` 是模块加载器必备的一个接口，默认扩展名是`.js`，框架会自动追加;

```
// seajs是全局变量，提供的 use 方法可以理解成C语言 main 函数，
//是个入口方法，一个页面至少需要一个seajs.use方法，但我们也不有对于1个的use方法，会出现意想不到奇怪问题；

// 启动foo模块
seajs.use('./foo');

seajs.use(['platform/seajsDemo/0.0.1/foo'], function(foo) {
    foo.start();
});
```

[slide]

## require 引用模块

require 引用模块有别名、标识、相对三种方式，原则是外部模块组件使用别名，项目内使用相对路径，
require 会将参数解析转化为文件路径；
比如 

```
require("my-module");
require("./my-module");

```

注意事项-约定
----
* define 参数require 不用使用其他命名;
* require 不要重命名;
* require 参数不支持变量，正确是的使用常量字符串，build过程生成模块是静态过程，动态无法确定模块;

[slide]

## 配置

* 使用seajs.config() 方法设置环境;
* 主要配置别名、路径，在控制台使用 seajs.data 可查看配置
* 配置与路径关系


<table class='tb'>
  <thead>
  <tr>
    <th>name</th>
    <th>base</th>
    <th>alias</th>
    <th>paths</th>
    <th>结果</th>
    <th>结论</th>
  </tr>
  </thead>
<tr>
  <td>require('jquery')</td>
  <td>https://a.alipayobjects.com/</td>
  <td>'jquery': 'jquery/jquery/1.9.1/jquery'</td>
  <td>无</td>
  <td>https://a.alipayobjects.com/jquery/jquery/1.9.1/jquery.js</td>
  <td>无paths时，base+alias</td>
</tr>

<tr>
  <td>require('platform/seajsDemo/0.0.1/demo5')</td>
  <td>https://a.alipayobjects.com/</td>
  <td>无</td>
  <td>platform: 'http://127.0.0.1:8080/dist/platform'</td>
  <td>http://127.0.0.1:8080/dist/platform/seajsDemo/0.0.1/demo5.js</td>
  <td>paths+name</td>
</tr>

<tr>
  <td>require('dialog')</td>
  <td>https://a.alipayobjects.com/</td>
  <td>'dialog': 'arale/dialog/1.2.4/dialog'</td>
  <td>'arale': 'https://a.alipayobjects.com/arale'</td>
  <td>https://a.alipayobjects.com/arale/dialog/1.2.4/dialog</td>
  <td>paths替换arale中key，也就是 `arale`/dialog/1.2.4/dialog 会替换后的字符串</td>
</tr>

<tr>
  <td>require('./demo')</td>
  <td>https://a.alipayobjects.com/</td>
  <td>无</td>
  <td>无</td>
  <td>http://127.0.0.1:8080/demo.js</td>
  <td>网站根目录+name</td>
</tr>
</table>

> 结论，正确的做法是每个组件至少需要配置path或者alia，这样才能找到正确路径；


[slide]

##配置例子

```javascript
(function() {

    // seajs配置（打包和运行时共用）
    var config = {

        alias: {
            'seajs-debug': 'seajs/seajs-debug/1.1.1/seajs-debug',
            '$': 'jquery/jquery/1.9.1/jquery',
            '$-debug': 'jquery/jquery/1.9.1/jquery',
            'jquery': 'jquery/jquery/1.9.1/jquery',
            'jquery-debug': 'jquery/jquery/1.9.1/jquery-debug',
            'dialog': 'arale/dialog/1.2.4/dialog',
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
```
[slide]

# 常见问题
* 模块的对应的js加载了，为什么代码没运行？
> 问题分析: seajs 是按照模块标识加载了，这里是标识错误，但标识对应的js路径正确，因此加载了，但标识错误，无法识别，所以没有运行;请查看[ID 和路径匹配原则](https://github.com/seajs/seajs/issues/930) 
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



