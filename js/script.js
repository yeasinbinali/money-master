function calculate(){
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    const foodAmount = parseInt(foodInput);
    const rentAmount = parseInt(rentInput);
    const clothAmount = parseInt(clothInput);

    const expensesAmount = foodAmount + rentAmount + clothAmount;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expensesAmount;

    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseInt(incomeInput);

    const balanceAmount = document.getElementById('balance-amount');
    balanceAmount.innerText = incomeAmount - foodAmount - rentAmount - clothAmount;
}

function save(){
    const saveInput = document.getElementById('save-input').value;
    const saveAmount = parseInt(saveInput);

    const balanceAmount = document.getElementById('balance-amount').innerText;
    const savingBalance = document.getElementById('saving-balance');
    const remainingAmount = document.getElementById('remaining-amount');

    savingBalance.innerText = balanceAmount / saveAmount;

    remainingAmount.innerText = balanceAmount - savingBalance.innerText;
}