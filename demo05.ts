// 声明引用变量
let arr1:number[] = [1,2,3,4,5,6,7]
let arr2:Array<string> = ['1','2','3']
// 定义一个数组表示以后可以存放数组和数字
let arr3:(number | string)[] = []
// 表示数组里面可以存放任意的数据类型
let arr4:any[] = []

// 元祖数组 严格限制类型和长度的元祖数组
// 表示可以存存储3个元素 类型分别是  number boolean string  超过指定长度或类型 会报错
let arr5:[number, boolean, string];
arr5 = [1,  false, '1']

// 枚举  用于表示几个固定的取值  一年四季 性别  ts 为 js 的扩展类型
enum Gender {
    // 默认0
  Male,
//   默认为 1
  Femal
}
let valGender:Gender;
// valGender = 'name' //报错
valGender = Gender.Femal  
valGender = 10  
// enum  枚举的底层的 实现其实也是数值的递增  所以不会

// any 表示任意类型  一版用于定义一些比较通用性比较强的变量，或者保存一些不确定的值  注意不要过多使用any 这样 就变成了js了 
let anyType: any;
anyType = 1;
anyType = false

// void 类型 与 any 刚好相反表示没有任何 类型  一般用于函数返回值 ts 中只有 null  和 undefined 可以赋值给 void
function testVoid():void{console.log("Test void")}
let valueVoid: void;
// valueVoid = '1';  报错
// valueVoid = null;
valueVoid = undefined;
// valueVoid = null;  报错

// never 表示那些永远不存在的值的类型 一版用于抛出异常 或根本不可能有返回值的函数
function demo():never {
    throw new Error("报错了")
}
function demo2():never {
    while(true){}
}

// Object 对象类型
let obj:object //定义一个只能保存对象的变量
// obj = 1;
obj = {name: 'lll', age: 30}

// 如何表示一个具体对象数据结构   使用ts提供的接口
interface TestInterface {
    dd: string
}
let obj2:TestInterface  = {
   dd:'123'
}

// 和 number  string boolean enum 数据类型一样  接口也是一种数据类型 用来约束使用者
interface FullName {
    firstName: string,
    lastName: string
}

let obj11:FullName = {
    firstName: "Jonathan",
    lastName: 'Lee'
} 
function say12({firstName, lastName}: FullName) {
    console.log(`我的姓名是：${firstName}_${lastName}`)
}

// 元祖
let x:[string, number]
x = ['hello', 10]
console.log(x)