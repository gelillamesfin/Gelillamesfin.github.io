// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object

const user:{[key:string]:any}={};

user.name="John";
user.surename="Smith";
user.name="Pete";

delete user.name;