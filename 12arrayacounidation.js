accounts = [{
    acno: 1000,
    ac_type:'savings',
    balance:50000,
    transaction:[{
        to:1001,
        amount:5000,
        msg:'ebill',
        mode:'gpay'
    }, {
        to:1002,
        amount:2000,
        msg:'emi',
        mode:'neft'
    }, {
        to:1003,
        amount:1000,
        msg:'recharge',
        mode:'phonepay'
    }]
}, {
    acno: 1001,
    ac_type:'current',
    balance:150000,
    transaction:[{
        to:1003,
        amount:15000,
        msg:'emi',
        mode:'neft'
    }, {
        to:1002,
        amount:12000,
        msg:'emi',
        mode:'neft'
    }, {
        to:1004,
        amount:1000,
        msg:'recharge',
        mode:'phonepay'
    }]
}, {
    acno: 1003,
    ac_type:'current',
    balance:10000,
    transaction:[{
        to:1005,
        amount:200,
        msg:'ebill',
        mode:'gpay'
    }, {
        to:1009,
        amount:1000,
        msg:'emi',
        mode:'neft'
    }, {
        to:1007,
        amount:1000,
        msg:'loan',
        mode:'phonepay'
    }]
}, {
    acno: 1004,
    ac_type:'fixed',
    balance:1000000,
    transaction:[]
}, {
    acno: 1005,
    ac_type:'current',
    balance:710000,
    transaction:[{
        to:1003,
        amount:20000,
        msg:'emi',
        mode:'upi'
    }, {
        to:1009,
        amount:11000,
        msg:'loan',
        mode:'neft'
    }, {
        to:1007,
        amount:13000,
        msg:'car loan',
        mode:'phonepay'
    }]
}
]

// total number of accounts
console.log("1")
console.log("total number of accounts",accounts.length)

//print account details whose account type is savings
console.log("2")
console.log(accounts.filter(data => data.ac_type=="savings").forEach(e=>console.log(e)))

//Print balance of the account number 1003
console.log("3")
console.log(accounts.find(data => data.acno==1003).balance)

//print all gpay transactions
console.log("4")
console.log(accounts.map(data => data.transaction).flat().filter(t=>t.mode=="gpay"))

//print all transactions whoes amount>10000
console.log("5")
console.log(accounts.map(data=>data.transaction).flat().filter(t=>t.amount>10000))

//  print debit transactions of acc no 1000
console.log("6")
const debitTransactions = accounts.filter(d => d.acno === 1000).map(d => d.transaction);
console.log(debitTransactions);
// 2nd way 
//conssole.log(accounts.find(d => d.accno === 1000).transaction);


//print transaction history of 1005
console.log("7")
console.log(accounts.find(d=>d.acno === 1005).transaction);
