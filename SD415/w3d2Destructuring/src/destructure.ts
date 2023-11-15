/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// the following type definition says that SalaryObj has keys of type string and values of type number
type SalaryObj = { [key: string]: number };
 export function topSalary (salaries:SalaryObj):string|null{

    let topSalary=Object.values(salaries)[0];
    let topPaid=Object.keys(salaries)[0]
// console.log(topPaid)
// console.log(topSalary)

  
const allthesalaries=Object.values(salaries);


for (const salary of allthesalaries){
    if (salary> topSalary){
        topSalary=salary
    }
   for(const [key,value] of Object.entries(salaries)){
    if (value> topSalary){
        topSalary=value
        topPaid=key
    }
   }

}
if (topPaid!==null){
    return (`${topPaid}`);
}else {
    return ("none")
}
}

// return topPaid;

//console.log (topSalary(salaries2));
