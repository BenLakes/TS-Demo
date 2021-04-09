/**
 * 编写自己的 声明文件  一般以 .d.ts 结尾
 * 类似test.ts 声明文件只需命名成test.d.ts即可, ts 会自动去对应名字的.d.ts文件查找类型
 */
// 声明文件不能出现实现
declare let myName:string;

declare function say(firstName: string, lastName: string):string;

// 想要安装jQuery 的声明文件 那么只需 npm install @types/jquery