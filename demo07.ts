//  类 的构造
class XiaoJieJie {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }
    say(){
        console.log("小哥哥好")
    }
}
let xiaojiejie1 = new XiaoJieJie("CAVS", 30);
console.log(xiaojiejie1)

xiaojiejie1.say();