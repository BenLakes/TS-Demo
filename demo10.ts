// let obj:object; //定义一个只能保存对象的变量
// obj = 1
// obj = {name: 'lnz', age: 30}

// 上面这种定义的ts对象，但对象内部属性并没有被限制，跟不适用ts一样 意义不大 为进一步定义对象内的各个属性 就产生了接口

// 接口类型  跟 number/ string/boolean 一样 都是用来约束使用者的

// 基本用法  定义一个函数输出一个完整的姓名
interface FullName {
    firstName: string,
    lastName: string
}
let objFullName:FullName = {
   firstName: "Lee",
   lastName: "Cavs"
}

function showFullName({firstName, lastName}:FullName):string{
    return `${firstName}_${lastName}`
}

console.log(showFullName(objFullName))

/**
 * 属性数量不确定时的定义方法  如果使用接口来限定变量或形参， 那么在给变量或形参赋值时，必须和接口限定的一模一样 不然会报错
 * 但在开发中 多一个少一个属性是很正常的
 * 少一个， 使用预定义的可选属性  XXX?string
 * 多一个， 使用索引签名 [propsName: string]:string
 */
// 可选属性
interface FullName1 {
    firstName: string,
    lastName: string,
    middleName?: string,
}
function say1({firstName, lastName, middleName}: FullName1):string {
   if(middleName){
      return `${firstName}_${middleName}_${lastName}`
   }else {
    return `${firstName}_${lastName}`
   }
}

// 多一个，用索引签名 用于描述那些  通过索引得到的类型， 理解为定义对象中key(propName) 和 value 的数据结构，后续对象的属性，只要满足
// key 和 value 索引签名的限定即可， 无论多少个都无所谓
interface FullName2 {
    fullName: string,
    lastName: string,
    [propsName: string]: string
}
let obj3:FullName2 = {
    fullName: 'Lee',
    lastName: 'CAVS',
    // 只要key值和 value 满足索引签名的限定即可
    // 无论key值是什么类型 最终都会自动转换成 字符串类型
    false: '12',
    12: '123',
    dd: 'abc'
}

// 接口的继承
interface LengthInterface {
    length: number
}
interface WidthInterface {
    width: number
}
interface HeightInterface {
    height: number
}
interface RectInterface extends LengthInterface, WidthInterface, HeightInterface {
   color: string
}

let rect:RectInterface = {
    width: 10,
    height: 20,
    length: 30,
    color: 'red'
}

// 函数接口  函数本质是一个特殊对象，我们也可以用接口定义函数的参数和返回值
interface SumInterface {
    (a:number, b:number):number
    // () =>number
}

// 使用这种方式定义规范
let sum:SumInterface = function (x, y){
    return x + y;
}
sum(1, 2);
