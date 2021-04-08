// ts 类的使用

class TestTsClass {
    age: number;
    name: string;
    constructor(age:number, name:string){
      this.age = age;
      this.name = name
    }
    say():string{
        return this.age + this.name;
    }
}

const Test = new TestTsClass(30,"CAVS");
console.log(Test.say())
