function compareNumber(a,b){
    if (a>b)return -1

    if (a===b)return 0;
    if (a<b)return 1
}
    let arr=[1,15,2];

      arr.sort(compareNumber)

console.log(arr)//ascending order 



function smallToLarge(a,b){
    if (a>b)return 1

    if (a===b)return 0;
    if (a<b)return -1
}
    let arr2=[1,15,2];

      arr2.sort(smallToLarge)

console.log(arr2)//


function LaxComparing(a,b){
    a1= a.toString();
    b1= b.toString();
    if (a1>b1)return -1

    if (a1===b1)return 0;
    if (a1<b1)return 1
}
    let arr3=[1,15,2];

      arr3.sort(LaxComparing)

console.log(arr3)//


