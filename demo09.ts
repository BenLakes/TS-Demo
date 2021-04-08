/**
 * ts 问号的用法
 * product?.price
 * 当product 没有值的时候 不访问price 属性
 */
interface Type {
    detail: string,
    price?: number
}
const product:Type = {
    detail: "123",

}
console.log("product", product?.price)