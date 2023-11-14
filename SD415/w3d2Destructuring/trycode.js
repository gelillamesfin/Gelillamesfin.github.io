// let   names=["gelilla,"," mesfin","aman ","tafa ","abby","bekele","ezra","ketema ","family","names","practice"]

// const [firstName,lastName,...rest]=names;

//console.log (firstName,lastName);
//console.log(rest[0]);


// destructure the team array onto variables with the same names as the elements, but all lower case
// console.log("expect Bob", bob );
// console.log("expect Jim", jim)
// const team = [ "Bob", "Fred", "Jim"]
// const [bob,fred,jim]=team;

// console.log(bob);

const team = { 
    point: "Bob", 
    shooting: "Fred", 
    power: "Jim", 
    small: "Al", 
    center: "Big Sleep" }
// 1. destructure the team object onto variables with the same names as the properties

const {point:bob,shooting:fred,power:jim,small:al, center:bigsleep}=team;
console.log("expect Big Sleep", bigsleep);
console.log("expect Jim", jim)

// destructure the team onto variables: one (point guard), two (shooting guard), three (small 
//     forward), four (power forward) and five (center)
    console.log("expect Jim: ", four);
    console.log("expect Bob: ", one);

    const{point:one(point guard), shooting: t}
    
