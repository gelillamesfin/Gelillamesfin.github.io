
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]){
    let doubled:number[]=arr.map((num:number)=> num * 2);
 return doubled;

}

export function doubleAges(arr:Person[]):Person[]{
    return arr.map((person:Person)=>({
        name:person.name,
        age:person.age*2,
}));
}

export function filterEven(arr:number[]){
    let filtered=arr.filter(num=>num%2==0)
    return filtered;

}

export function filterOver10(arr:Person[]):Person[] {
    return arr.filter((person:Person)=> person.age>10);
    }

export function findEvenNum(arr:number[]):number|undefined{
    let firstEven=arr.find(num=>num%2==0)

    return firstEven;

}

export function findEvenAge(people:Person[]):Person|undefined{
    return (people.find((person:Person)=>person.age % 2 ===0))
}

export function includesEvenNum(arr:number[]):boolean{
    const evenIncluded=findEvenNum(arr)!==undefined; 
return evenIncluded;
}

export function includesEvenAge(arr:Person[]):boolean{
const evenAgeIncluded=!!findEvenAge(arr);


    return evenAgeIncluded;

}


