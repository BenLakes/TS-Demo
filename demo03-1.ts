function selectXiaojiejie(age: number, sc?: string){
    if(sc){
       return age + sc + '小姐姐';
    }
    return age + "小姐姐"
}
console.log(selectXiaojiejie(18, "胖胖的"))