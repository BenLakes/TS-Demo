/**
 * 声明文件、模块、命名空间
 * 1.声明文件：把声明类型的的部分抽离成单独一个声明文件，方便别人使用我们的types 或者使用别人的types
 * 2. 模块（导入导出）:
 *  因为ts 是 js 的超集  js中的模块用法可以继续使用  可以使用 es6 或 nodejs 的模块用法
 */

// as  是导入之后重命名
import bijiaoFunc, {yyyy as ddd, a, b, c} from './demo13export01';
import {xxxx}  from './demo13export02';

// 将整个模块到处到一个变量 去使用
import * as test from './demo13index';
// import ddd = require('./demo12nodeexport');


let strArr = ["Hello", "98052", "101"];

strArr.map(item => console.log(bijiaoFunc(item)))