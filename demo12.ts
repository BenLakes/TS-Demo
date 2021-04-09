/**
 * TS 泛型
 */

// 1. 用any 
// 定义一个可以指定长度和 可以使用任意指定的内容填充这个数组
let getArray = (value:any, items:number = 5):any[] => {
   return new Array(items).fill(value);
}

let arr = getArray("abc",3)
console.log(arr);
let arr8 = getArray(6,3)
console.log(arr8);

// let res = arr.map(item => item.length)
// console.log("res", res)

// 2 用泛型 <T>  失去了代码编辑时报错 也就失去了ts最大的作用  为解决这个问题 才引入泛型
/**
 * 泛型 用来弥补any没有语法提示和报错的缺点
 * 可以 最开始不指定类型，后面再传入类型确定类型
 * 泛型指定传入类型 在 函数 括号 前面  返回类型 在括号后面
 */
// 泛型的类型是可以不指定的 指定了就按照 正常的来， 不指定就会推导出来 
let getArray2 = <T>(value: T, items:number=5):T[] => {
   return new Array(items).fill(value);
}

let arr10 = getArray2<string>('accc', 3);
// let arr10 = getArray2<number>(123123, 3);

let res = arr10.map(item => item.length)
console.log("res", res)

/**
 * 泛型约束
 * 默认情况下泛型可以是任意类型 但有些情况 下 我们需要指定类型满足某些条件后才能指定  就需要泛型约束
 * 
 */
// 泛型的约束
interface LengthInterface {
    length: number
}

// 泛型约束在前   返回值类型在后

let getArray1 = <T extends LengthInterface>(value:T, items:number=5):T[]=>{
   return new Array(items).fill(value)
}

let array = getArray1<string>("abcdddd", 3);
console.log(array.map(item => item.length))

