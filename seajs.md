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

## demo
----
<iframe data-src="http://127.0.0.1:8000/demo1.htm" src="about:blank;"></iframe>


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

seajs 是一个遵循`CommonJS规范`的JavaScript`模块加载`框架，可以实现JavaScript的模块化开发及加载机制，主要包含模块定义、模块引用、模块标识3个部分；

<a href="#9">一个简单的模块</a>

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

## 模块标识

标识就是传递给require方法的参数，小驼峰命名规则、或者./和../开头的相对路径、/开头的绝对路径，一般无需指定`.js`后缀;
它的意义在于将类聚的方法和变量等限定在私有的作用域中，每个模块具有独立的空间，它们互不干扰，在引用时也显得干净利落;

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

        //var cdnHost = '/dist'

        var isDaily = false;
        if (typeof document !== 'undefined') {
            var scripts = document.getElementsByTagName('script');
            isDaily = (scripts[scripts.length - 1].src || '').indexOf('//alinw.alicdn.com') == -1;
        }
        var cdnHost = isDaily ? '//g-assets.daily.taobao.net' : '//alinw.alicdn.com';

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

#信息平台前端项目-脚手架生成过程

![alinwDemo](https://img.alicdn.com/tps/TB1HLOVLXXXXXXhXFXXXXXXXXXX-977-602.gif)

[slide]

## 信息平台前端项目

layout/default.vm 

```html
<!doctype html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="renderer" content="webkit"/>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"/>
<meta name="data-spm" content=""/>
<title>$!{pageTitle}</title>

## STYLES
$control.setTemplate("infovmcommon/s/1.1/favicon.vm")
$control.setTemplate("infovmcommon/s/1.1/css.vm")
<link rel="stylesheet" href="${gitFamily}/alinwDemo/${gitVersion}/css/index.css"/>

## SEAJS CONFIG
$control.setTemplate("infovmcommon/s/1.1/js.vm").setParameter("simple", 1)
<script src="${gitFamily}/alinwDemo/${gitVersion}/config.js"></script>
<script>
seajs.config({
    #if(${gitVersion} == "src")
        ## LOCAL ENV
        comboExcludes: /.*/,
        preload: [ 'crystal/plugins/1.0.1/handlebars' ],
        map: [
            [ seajs.resolve('platform/alinwDemo/${gitVersion}/'), '${gitFamily}/alinwDemo/${gitVersion}/' ]
        ],
    #else
        ## PACKED ENV
        alias: {
            handlebars: 'alinw/handlebars/1.3.0/runtime'
        },
    #end
    vars: {
        locale: '${locale}'
    }
});
</script>
</head>
<body data-spm="$!{spmPageId}" class="i18n-${locale}">

#if(${gitVersion} != "src")
## SPM & GoldLog & JsTracker
$control.setTemplate("infovmcommon/s/1.1/monitor.vm")
#end

## HEADER
$control.setTemplate("infovmcommon/s/1.1/header.vm").setParameter("width", 1000)
$control.setTemplate("header.vm")

## SCREEN
$screen_placeholder

## FOOTER
$control.setTemplate("infovmcommon/s/1.1/footer.vm")

## JS ENTRY
<script>
seajs.use([
    'crystal',
    'platform/alinwDemo/${gitVersion}/modules/common.setup/index'
], function(crystal, setup) {
    var app = crystal.app;

    // 请求路径前缀和其他的应用级别的变量
    app.set('demoPrefix', '/demo/');
    app.set('workPrefix', 'https://work.alibaba-inc.com/');

    setup({
        family: 'platform', // 前端组名
        name: 'alinwDemo', // 前端应用名
        pageTitle: '$!{pageTitle}', // 页面标题（这里注意要做单引号双引号的转义）
        debug: ${isDaily}, // 是否是测试环境
        gitVersion: '${gitVersion}', // 前端GIT版本号
        csrfToken: '',
        defaultParams: { // 所有请求默认带上的参数
            locale: '${locale}'
        },
        appName: 'demo', // 在BUC注册的appName
        backUrl: '/demo/loginSuccess.htm', // 登录成功的回调页面
        contextPath: 'demo' // 后端应用名
    });
});
</script>
</body>
</html>
```

[slide]

本地开发，vm生成的html

```html
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"/>
        <meta name="data-spm" content=""/>
        <title>Alinw Demo</title>
        <!-- S GLOBAL Favicon -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="//aliwork.alicdn.com/tps/i2/TB1Al7VFVXXXXcIXXXXazxJIVXX-144-144.png"/>
        <link rel="shortcut icon" href="//aliwork.alicdn.com/tps/i3/TB1H68pGFXXXXX9XXXXFArBHXXX-48-48.ico" type="image/x-icon">
        <!-- E GLOBAL Favicon -->
        
        <!-- S GLOBAL CSS -->
        <link rel="stylesheet" href="//alinw.alicdn.com/??platform/common/s/1.1/global/global.css,alinw/kuma/3.0.4/kuma.css?t=201505220846"/>
        <!-- E GLOBAL CSS -->
        <link rel="stylesheet" href="http://30.10.101.236:3000/alinwDemo/src/css/index.css"/>
        <!-- S GLOBAL JS -->
        <script src="https://alinw.alipayobjects.com/??seajs/seajs/2.2.3/sea.js,seajs/seajs-combo/1.0.0/seajs-combo.js,seajs/seajs-style/1.0.2/seajs-style.js"></script>
        <!-- E GLOBAL JS -->
        <script src="http://30.10.101.236:3000/alinwDemo/src/config.js"></script>
        <script>
        seajs.config({
        
        
        comboExcludes: /.*/,
        preload: [ 'crystal/plugins/1.0.1/handlebars' ],
        map: [
        [ seajs.resolve('platform/alinwDemo/src/'), 'http://30.10.101.236:3000/alinwDemo/src/' ]
        ],
        
        vars: {
        locale: 'zh-cn'
        }
        });
        </script>
    </head>
    <body data-spm="" class="i18n-zh-cn">
        <!-- S GLOBAL HTML -->
        <div id="ais-remote-header" style="height: 36px;"></div>
        <script type="text/javascript"
        src="//alinw.alicdn.com/??platform/openwork/jssdk/sdk.min.js,secdev/pointman/js/index.js?t=201506011615"
        app="alinw"></script>
        
        <script type="text/javascript">
        TOP.ui('headhr', {
        container: '#ais-remote-header',
        pageWidth: '1000',
        locale: 'zh-cn',
        theme: 'white'
        })
        </script>
        <!-- E GLOBAL HTML   -->
        <div class="header">
            <div class="kuma-container-1000">
                <a class="logo" href="https://work.alibaba-inc.com/work/home"></a>
            </div>
        </div>
        <div class="kuma-container main">
            <div class="kuma-form" data-widget="~/demo.filter/"></div>
            <div data-widget="~/demo.list/"></div>
        </div>
        <!-- S GLOBAL HTML -->
        <style type="text/css">
        .footer {
        position: relative;
        font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', \5b8b\4f53, sans-serif;
        
        padding-left: 10px;
        padding-right: 10px;
        
        margin: 0 auto;
        text-align: center;
        color: #999;
        padding-bottom: 10px;
        }
        .footer .footer-hd,
        .footer .footer-bd {
        line-height: 27px;
        }
        .footer .footer-hd {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #dfdede;
        }
        .footer a {
        color: #999;
        padding: 0 3px;
        text-decoration: none;
        }
        .footer a:hover {
        color: #288df0;
        }
        .footer b,
        .footer .font-special {
        font-family: 'simsun', sans-serif;
        }
        </style>
        <div id="footer" class="footer border-top">
            <div class="footer-hd">
                <p>
                    <a href="https://admin.alibaba-inc.com/goods/adminhome/home.htm" target="_blank">&#34892;&#25919;</a>
                    <a href="https://meeting.alibaba-inc.com/" target="_blank">&#20250;&#35758;&#23460;</a>
                    <b>|</b>
                    <a href="https://ehr.alibaba-inc.com/welfare/" target="_blank">&#20840;&#27225;&#29233;</a>
                    <a href="https://iperformance.alibaba-inc.com/performance" target="_blank">&#32489;&#25928;</a>
                    <a href="https://alihr.alibaba.com:4430" target="_blank">PS</a>
                    <a href="https://hr.alibaba-inc.com/zhaopin" target="_blank">&#25512;&#33616;/&#36716;&#23703;</a>
                    <a href="https://ehr.alibaba-inc.com/sc/" target="_blank">HR&#26381;&#21153;&#20013;&#24515;</a>
                    <b>|</b>
                    <a href="https://it.alibaba-inc.com/portal/homepage" target="_blank">IT</a>
                    <a href="https://alilang.alibaba-inc.com" target="_blank">&#38463;&#37324;&#37070;</a>
                    <a href="https://webmail.alibaba-inc.com/alimail/" target="_blank">&#38463;&#37324;&#20113;&#37038;</a>
                    <a href="https://asset.alibaba-inc.com/workflow/myassets/index" target="_blank">&#36164;&#20135;&#24179;&#21488;</a>
                    <b>|</b>
                    <a href="https://bpms.alibaba-inc.com" target="_blank">&#27969;&#31243;&#24179;&#21488;</a>
                    <a href="https://iportal.alibabacorp.com/portal/default.aspx" target="_blank">&#36130;&#21153;&#20013;&#24515;</a>
                    <b>|</b>
                    <a href="https://baoxiao.alibabacorp.com/APPS/TES/Index.aspx" target="_blank">&#21592;&#24037;&#25253;&#38144;</a>
                    <a href="https://legal.alibabacorp.com/bogda/user/index.htm" target="_blank">&#27861;&#21153;&#20013;&#24515;</a>
                    <a href="https://work.alibaba-inc.com/work/links" target="_blank">&#26356;&#22810;<span
                    class="font-special">&gt;&gt;</span></a>
                </p>
            </div>
            <div class="footer-bd">
                <p class="copyright">&copy; 1999-2015 &#38463;&#37324;&#24052;&#24052;&#38598;&#22242; Powered by<a target="_blank"
                href="https://work.alibaba-inc.com/work/team/employee/1469">&#20449;&#24687;&#24179;&#21488;&#20107;&#19994;&#37096;</a>
            </p>
        </div>
    </div>
    <!-- E GLOBAL HTML -->
    <script>
    seajs.use([
    'crystal',
    'platform/alinwDemo/src/modules/common.setup/index'
    ], function(crystal, setup) {
    var app = crystal.app;
    // 请求路径前缀和其他的应用级别的变量
    app.set('demoPrefix', '/demo/');
    app.set('workPrefix', 'https://work.alibaba-inc.com/');
    setup({
    family: 'platform', // 前端组名
    name: 'alinwDemo', // 前端应用名
    pageTitle: 'Alinw Demo', // 页面标题（这里注意要做单引号双引号的转义）
    debug: true, // 是否是测试环境
    gitVersion: 'src', // 前端GIT版本号
    csrfToken: '',
    defaultParams: { // 所有请求默认带上的参数
    locale: 'zh-cn'
    },
    appName: 'demo', // 在BUC注册的appName
    backUrl: '/demo/loginSuccess.htm', // 登录成功的回调页面
    contextPath: 'demo' // 后端应用名
    });
    });
    </script>
</body>
</html>
```
[slide]

vm生成的线上生产html
线上生产域名 https://aliwork.alicdn.com
daily域名 https://g-assets.daily.taobao.net

```html
<!doctype html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="renderer" content="webkit"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1"/>
        <meta name="data-spm" content=""/>
        <title>Alinw Demo</title>
        <!-- S GLOBAL Favicon -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="//aliwork.alicdn.com/tps/i2/TB1Al7VFVXXXXcIXXXXazxJIVXX-144-144.png"/>
        <link rel="shortcut icon" href="//aliwork.alicdn.com/tps/i3/TB1H68pGFXXXXX9XXXXFArBHXXX-48-48.ico" type="image/x-icon">
        <!-- E GLOBAL Favicon -->
        
        <!-- S GLOBAL CSS -->
        <link rel="stylesheet" href="//alinw.alicdn.com/??platform/common/s/1.1/global/global.css,alinw/kuma/3.0.4/kuma.css?t=201505220846"/>
        <!-- E GLOBAL CSS -->
        <link rel="stylesheet" href="https://aliwork.alicdn.com/platform/alinwDemo/0.1.0/css/index.css"/>
        <!-- S GLOBAL JS -->
        <script src="https://alinw.alipayobjects.com/??seajs/seajs/2.2.3/sea.js,seajs/seajs-combo/1.0.0/seajs-combo.js,seajs/seajs-style/1.0.2/seajs-style.js"></script>
        <!-- E GLOBAL JS -->
        <script src="https://aliwork.alicdn.com/platform/alinwDemo/0.1.0/config.js"></script>
        <script>
        seajs.config({
        
        
        alias: {
        handlebars: 'alinw/handlebars/1.3.0/runtime'
        },
        
        vars: {
        locale: 'zh-cn'
        }
        });
        </script>
    </head>
    <body data-spm="" class="i18n-zh-cn">
        <!-- S GLOBAL Monitor -->
        <script id="tb-beacon-aplus" src="//alinw.alicdn.com/alilog/mlog/aplus_v2.js" exparams="category=&amp;userid=&amp;aplus&amp;yunid="></script>
        <script src="//alinw.alicdn.com/platform/common/s/1.1/monitor/goldlog.js?t=201506011615"></script>
        <script src="//alinw.alicdn.com/tb/tracker/1.0.19/index.js"></script>
        <script>try{JSTracker.config('sampling',1);JSTracker.config('nick',window.__getUserId?__getUserId():'0')}catch(e){}</script>
        <!-- E GLOBAL Monitor -->
        <!-- S GLOBAL HTML -->
        <div id="ais-remote-header" style="height: 36px;"></div>
        <script type="text/javascript"
        src="//alinw.alicdn.com/??platform/openwork/jssdk/sdk.min.js,secdev/pointman/js/index.js?t=201506011615"
        app="alinw"></script>
        
        
        
        
        <script type="text/javascript">
        TOP.ui('headhr', {
        container: '#ais-remote-header',
        pageWidth: '1000',
        locale: 'zh-cn',
        theme: 'white'
        })
        </script>
        <!-- E GLOBAL HTML   -->
        <div class="header">
            <div class="kuma-container-1000">
                <a class="logo" href="https://work.alibaba-inc.com/work/home"></a>
            </div>
        </div>
        <div class="kuma-container main">
            <div class="kuma-form" data-widget="~/demo.filter/"></div>
            <div data-widget="~/demo.list/"></div>
        </div>
        <!-- S GLOBAL HTML -->
        <style type="text/css">
        .footer {
        position: relative;
        font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', \5b8b\4f53, sans-serif;
        
        padding-left: 10px;
        padding-right: 10px;
        
        margin: 0 auto;
        text-align: center;
        color: #999;
        padding-bottom: 10px;
        }
        .footer .footer-hd,
        .footer .footer-bd {
        line-height: 27px;
        }
        .footer .footer-hd {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #dfdede;
        }
        .footer a {
        color: #999;
        padding: 0 3px;
        text-decoration: none;
        }
        .footer a:hover {
        color: #288df0;
        }
        .footer b,
        .footer .font-special {
        font-family: 'simsun', sans-serif;
        }
        </style>
        <div id="footer" class="footer border-top">
            <div class="footer-hd">
                <p>
                    <a href="https://admin.alibaba-inc.com/goods/adminhome/home.htm" target="_blank">&#34892;&#25919;</a>
                    <a href="https://meeting.alibaba-inc.com/" target="_blank">&#20250;&#35758;&#23460;</a>
                    <b>|</b>
                    <a href="https://ehr.alibaba-inc.com/welfare/" target="_blank">&#20840;&#27225;&#29233;</a>
                    <a href="https://iperformance.alibaba-inc.com/performance" target="_blank">&#32489;&#25928;</a>
                    <a href="https://alihr.alibaba.com:4430" target="_blank">PS</a>
                    <a href="https://hr.alibaba-inc.com/zhaopin" target="_blank">&#25512;&#33616;/&#36716;&#23703;</a>
                    <a href="https://ehr.alibaba-inc.com/sc/" target="_blank">HR&#26381;&#21153;&#20013;&#24515;</a>
                    <b>|</b>
                    <a href="https://it.alibaba-inc.com/portal/homepage" target="_blank">IT</a>
                    <a href="https://alilang.alibaba-inc.com" target="_blank">&#38463;&#37324;&#37070;</a>
                    <a href="https://webmail.alibaba-inc.com/alimail/" target="_blank">&#38463;&#37324;&#20113;&#37038;</a>
                    <a href="https://asset.alibaba-inc.com/workflow/myassets/index" target="_blank">&#36164;&#20135;&#24179;&#21488;</a>
                    <b>|</b>
                    <a href="https://bpms.alibaba-inc.com" target="_blank">&#27969;&#31243;&#24179;&#21488;</a>
                    <a href="https://iportal.alibabacorp.com/portal/default.aspx" target="_blank">&#36130;&#21153;&#20013;&#24515;</a>
                    <b>|</b>
                    <a href="https://baoxiao.alibabacorp.com/APPS/TES/Index.aspx" target="_blank">&#21592;&#24037;&#25253;&#38144;</a>
                    <a href="https://legal.alibabacorp.com/bogda/user/index.htm" target="_blank">&#27861;&#21153;&#20013;&#24515;</a>
                    <a href="https://work.alibaba-inc.com/work/links" target="_blank">&#26356;&#22810;<span
                    class="font-special">&gt;&gt;</span></a>
                </p>
            </div>
            <div class="footer-bd">
                <p class="copyright">&copy; 1999-2015 &#38463;&#37324;&#24052;&#24052;&#38598;&#22242; Powered by<a target="_blank"
                href="https://work.alibaba-inc.com/work/team/employee/1469">&#20449;&#24687;&#24179;&#21488;&#20107;&#19994;&#37096;</a>
            </p>
        </div>
    </div>
    <!-- E GLOBAL HTML -->
    <script>
    seajs.use([
    'crystal',
    'platform/alinwDemo/0.1.0/modules/common.setup/index'
    ], function(crystal, setup) {
    var app = crystal.app;
    // 请求路径前缀和其他的应用级别的变量
    app.set('demoPrefix', '/demo/');
    app.set('workPrefix', 'https://work.alibaba-inc.com/');
    setup({
    family: 'platform', // 前端组名
    name: 'alinwDemo', // 前端应用名
    pageTitle: 'Alinw Demo', // 页面标题（这里注意要做单引号双引号的转义）
    debug: true, // 是否是测试环境
    gitVersion: '0.1.0', // 前端GIT版本号
    csrfToken: '',
    defaultParams: { // 所有请求默认带上的参数
    locale: 'zh-cn'
    },
    appName: 'demo', // 在BUC注册的appName
    backUrl: '/demo/loginSuccess.htm', // 登录成功的回调页面
    contextPath: 'demo' // 后端应用名
    });
    });
    </script>
</body>
</html>
```
[slide]

## 资源
* 官网 http://seajs.org/docs/#docs
* demo https://github.com/kangning1206/seajsDemo/
* 前端ux网站 http://ux.alibaba.net/



