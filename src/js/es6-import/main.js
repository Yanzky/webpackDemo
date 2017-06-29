
// 逐一指定要加载，因为exports 输出多个值 所以import要一一加载单个值
// import {firstName, lastName, year, fnc} from './profile'
// console.log(fnc(3,8))
// console.log(firstName, lastName, year)
//整体加载  as 是指起别名 * 是指所有 main 是指给*起的别名main
import * as main from './profile'  //加载
// import 'profile' //直接执行此文件
console.log( main.fnc(1, 3) )
console.log(main.lastName)

import * as math from './circleplus'
import exp from './circleplus'
console.log(exp(math.e))


//import()函数 可以接受参数类似于 require()可以动态加载文件，import()是异步加载，require()是同步加载
//import 与import()函数不同，import 是编译是就加载了文件是静态的
//import()函数返回一个promise对象 ，可以执行按需加载（如在监听事件中）和条件加载
