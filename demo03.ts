let age:number=18
let jspang:string = '技术胖'
let b:boolean = true
// enum 类型  枚举  人
enum REN {nan, nv, yao}


let test:any = 'demo'

console.log(age)
console.log(jspang)
console.log(REN.nv)

console.log(test)
test = 12
console.log(test);

function xiaojiejie(age: number):string {
    return '找'+age+'的小姐姐';
}

let age1:number = 28

console.log(xiaojiejie(age1))

function selectXiaojiejie(age: number, sc?:string):string{

    if(sc !== undefined){
       return age + sc +'小姐姐'       
    }

    return age + '小姐姐'
}

console.log(selectXiaojiejie(18, '长腿'))


