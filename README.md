# ng1-module-decorator
一个@NgModule装饰器，可以在Angular1.x中使用，它只有2kb，但是却能够有效的缩短开发周期，降低模块间的耦合度，使代码更加简洁。

npm安装：
```
npm install --save ng1-module-decorator
或 cnpm install --save ng1-module-decorator
```
## 如何使用
具体的代码示例请查看`/example/`目录下的代码，这里做一个简要的说明：
```javascript
//导入模块装饰器
import  NgModule  from 'ng1-module-decorator';
//或 let NgModule = require('ng1-module-decorator');

//配置块和运行块
import { appConfig } from './app.config';
import { appRun } from './app.run';

//app组件
import { appComponent } from './component/app/app.component';
import { appState } from './component/app/app.state';

//home组件
import { homeComponent } from './component/home/home.component';
import { homeState } from './component/home/home.state';

//控制器
import { myController } from './share/controllers/myController';

//指令
import { greeting } from './share/directives/greeting';

//过滤器
import { replaceHello } from './share/filters/replaceHello';

//服务
import { greetService } from './share/services/greetService';
import { apiPath } from './share/services/apiPath';
import { colorService } from './share/services/colorService';

@NgModule({
    name: 'app',                    //模块名,必填
    imports:      ['ui.router'],    //导入模块,根模块必须导入uiRouter模块,其他可选
    configBlocks: [appConfig],      //配置块函数,可选
    runBlocks:    [appRun],         //运行块函数,可选
    states:       [                 //路由状态,可选
        appState,
        homeState
    ],
    components:   {                 //组件,可选
        appComponent,
        homeComponent
    },
    directives:   {greeting},       //指令,可选
    controllers:  {myController},   //控制器,可选
    filters:      {replaceHello},   //过滤器,可选
    providers:    {colorService},   //提供者,可选
    services:     {greetService},   //服务,可选
    constants:    {apiPath},        //常量服务,可选
    decorators:   {}                //装饰器,可选
})
class Module {}

//导出模块：通过name属性导出模块,不用需要关注模块名是什么
export const AppModule = new Module().name;
```
元数据name必须指定，它代表了模块的名字；根模块必须导入ui.router模块，因为state元数据使用到了这个模块的功能；其他元数据都是可选的，可以不填，填一个或者多个。
## 依赖
* AngularJS版本1.5.x以上
* uiRouter模块
## 编译
该项目使用到了ES6的装饰器功能，因此需要babel进行编译才能运行，这里给出一个.babelrc文件的一个配置，具体的编译配置可参考`\example\`。
```javascript
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    "transform-decorators-legacy"
  ],
  "env": {
    "test": {
      "plugins": [
        "istanbul"
      ]
    }
  }
}

```
## demo运行
```
cd ng1-module-decorator
npm install
npm run server
```
然后会自动运行项目并打开浏览器。
## 扩展
该项目指定了一些必须的依赖，但是你可以fork该项目，并改动源码来适应你自己的项目。相信我这会很轻松，因为它真的很小，只有几十行的代码。