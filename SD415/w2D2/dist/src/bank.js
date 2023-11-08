/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g.,
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/
export const bank = {
    transactionsDB: [],
    debit: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            if (amount > 0 && this.getBalance(id) >= amount) {
                this.saveTransaction(id, -amount);
            }
        }
    },
    credit: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            if (amount > 0) {
                this.saveTransaction(id, amount);
            }
        }
    },
    getBalance: function (id) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            return customer.customerTransactions.reduce(function (balance, transaction) {
                return balance + transaction;
            }, 0);
        }
        return 0;
    },
    saveTransaction: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            customer.customerTransactions.push(amount);
        }
        else {
            this.transactionsDB.push({ customerId: id, customerTransactions: [amount] });
        }
    },
    bankBalance: function () {
        return this.transactionsDB.reduce((totalBalance, customer) => totalBalance + this.getBalance(customer.customerId), 0);
    },
}; //define bank object as type Bank
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }
];
/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        customer.customerTransactions.push(amount);
    }
};
