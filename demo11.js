/**
 * ts 函数声明 和 实现 分离的方法
 *
 */
var add12 = function (a, b) {
    return a + b;
};
console.log(add12(1, 2));
var add13 = function (a, b) {
    return a + b;
};
console.log(3, 4);
// ts 函数参数的三种用法  可选参数后面只能跟可选参数  不然会报错  y 默认参数
function add(x, y, z) {
    if (y === void 0) { y = 10; }
    return x + y + (z ? z : 0);
}
var res2 = add(10, 20);
var res1 = add(10, 20, 12);
// 剩余参数
function add4(x) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return x + args[0];
}
/**
 * 类型断言  理解(就是做一个假设  让编译通过)
 * 1. 解释型 强制类型转换 或叫选择
 * 2.类型断言 就是告诉编译器  不要帮我们检查了，手动检查了  他就是这个类型
 *   用法 () 或者  as 来处理   推荐使用 as jsx 值支持这种断言语法
 */
var str = "1233";
var len3 = str.length;
console.log("len3", len3);
// let len = (<string>str).length
// 建议使用下面这种方式   jsx 只兼容这种写法
// let len2 = (str as string).length
