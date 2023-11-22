

/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.  
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object. 
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.  
*/

/**
 * @returns {bank} factory function that builds and returns bank object
 */
export function makeBank(){
    //implement this
    const transactionsDB:Customer[]= [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
    

//const bank = { transactionsDB: [], }
const bank={
    getBalance:function (id:number) {
    const customer = transactionsDB.find(customer => customer.customerId === id);
    let balance = 0;
    for (const trans of customer.customerTransactions) { balance += trans; }
    return balance;
},

bankBalance:function () {
    let total = 0;
    for (const trans of transactionsDB) {
        total += this.getBalance(trans.customerId);
    }
    return total;
}

}
return bank;
}
const myBank=makeBank();