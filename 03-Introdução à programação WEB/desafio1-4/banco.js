const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

function createTransaction(transaction){
    user.transactions.push(transaction);
    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    }
    else {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(type) {
    maxValue = 0;
    for (transaction of user.transactions){
        if (maxValue < transaction.value) {
            maxValue = transaction.value;
        }
    }

    return maxValue;
}

function getAverageTransactionValue(){
    sum = 0;
    const {transactions} = user;
    for (transaction of transactions){
        sum += transaction.value;
    }

    return sum / transactions.length;    
}

function getTransactionsCount(){
    countDebit = 0;
    countCredit = 0;

    const {transactions} = user;
    for (transaction of transactions){
        if (transaction.type === 'credit'){
            countCredit++
        }
        else{
            countDebit++
        }
    }

    return {credit: countCredit, debit: countDebit};
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
