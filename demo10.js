// let obj:object; //定义一个只能保存对象的变量
// obj = 1
// obj = {name: 'lnz', age: 30}
var objFullName = {
    firstName: "Lee",
    lastName: "Cavs"
};
function showFullName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return firstName + "_" + lastName;
}
console.log(showFullName(objFullName));
