
type Name={
    firstName:string,
    lastName:string
}
export function  firstLast(names:string []):Name[]{
return names.map((name)=>{
    const arr=name.split(' ')
    return {
        firstName:arr[0],
        lastName:arr[1],
    }
})
}




//console.log(firstLast(["fred smith","carl lindstrom"]));

// Use slice and splice to write TypeScript code for the replaceEnds function. replacends should be a pure function.
 export  function replaceEnds(arr:number[],val:number,val2:number,val3:number,val4:number):number[]{
  let sliced=arr.slice();
 
  sliced.splice(0,2,val,val2);
 sliced.splice(sliced.length-2,2,val3,val4)
 
 return sliced;
 }
 //  let arr2=[5,4,3,2,1,0]
//  console.log(replaceEnds(arr2,6,1,2,4)) 
 export function higho(func:(num:number)=>number,arr:number[]):number[]{
    return arr.map(func);
}


export function square(num:number):number{
    return (num*num)
}


export function absVal(num:number):number{
return num<0?-num:num;
}

// console.log(higho(square,[1,2,3,4]));
// console.log(higho(absVal,[1,-2,3,-4]));

 type Session ={
    userId:number,
    duration:number,
 }
 type Day={
    sessions:Session[],
    date:string,
 }
export function calculateDailyTotalDuration(sessions:Session[]):number{
let totalDuration=0;
// for(const day of dailyRecord){
    for (const session of sessions){
       totalDuration+=session.duration;

    }

return totalDuration;
}
export function getAllSessions(dailyRecord:Day[]):Session[]{
    let result:Session[]=[]
    for (const day of dailyRecord){
        result= result.concat(day.sessions)
    }
    return (result);
}
export function getAllSessionsForUser(dailyRecord:Day[],userId:number):Session[]{
    const allSession=getAllSessions(dailyRecord);
    const userSessions=allSession.filter(session=>session.userId===userId)
    return (userSessions)

}

export function getAllDurations(dailyRecord:Day []):number[]{
    const allSession=getAllSessions(dailyRecord);
    const allDuration=allSession.map(session=>session.duration);
    return allDuration;

}

//function replaceEnds(arr:number[],val1:number,val2:number):number[]{

//     let result=arr.slice();//copys the arr 

// result.splice(0,1,val1);
// result.splice(result.length-1,1,val2);


//     return (result);
    
// }

// const arr1=[1,2,3,4,5];
//  const result=replaceEnds(arr1,0,100);
// const result2=replaceEnds(arr1,100,0);

// console.log(arr1);
// console.log(result);
// console.log(result2);