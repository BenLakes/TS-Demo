/**
 * TS 泛型
 */
// 1. 用any 
// 定义一个可以指定长度和 可以使用任意指定的内容填充这个数组
var getArray = function (value, items) {
    if (items === void 0) { items = 5; }
    return new Array(items).fill(value);
};
var arr = getArray("abc", 3);
console.log(arr);
var arr8 = getArray(6, 3);
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
var getArray2 = function (value, items) {
    if (items === void 0) { items = 5; }
    return new Array(items).fill(value);
};
var arr10 = getArray2('accc', 3);
// let arr10 = getArray2<number>(123123, 3);
var res = arr10.map(function (item) { return item.length; });
console.log("res", res);
// 泛型约束在前   返回值类型在后
var getArray1 = function (value, items) {
    if (items === void 0) { items = 5; }
    return new Array(items).fill(value);
};
var array = getArray1("abcdddd", 3);
console.log(array.map(function (item) { return item.length; }));
