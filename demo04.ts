// 函数的三种方式
function add (num1:number, num2:number):number{
  return num1 + num2
}
console.log(add(1,2))

// 函数表达式法
let add1 = function (num1:number, num2: number):number{
    return num1 + num2
}
console.log(add1(1,4))

let add2 = (num1:number, num2:number):number => {
    return num1 + num2
}

console.log(add2(2,4))