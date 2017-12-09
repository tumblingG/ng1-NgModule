//导入装饰器
import  NgModule  from '../index';
console.log(NgModule);
//或 let NgModule = require('../index');

//在实际项目你应该使用:
//import  NgModule  from 'ng1-module-decorator';
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

//通过name属性导出模块,不用需要关注模块名是什么
export const AppModule = new Module().name;