function calculate(){
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothInput = document.getElementById('cloth-input');
    const foodValue = foodInput.value;
    const rentValue = rentInput.value;
    const clothValue = clothInput.value;

    const foodAmount = parseInt(foodValue);
    const rentAmount = parseInt(rentValue);
    const clothAmount = parseInt(clothValue);

    const expensesAmount = foodAmount + rentAmount + clothAmount;

    const incomeInput = document.getElementById('income-input');
    const incomeValue = incomeInput.value;
    const incomeAmount = parseInt(incomeValue);

    if(incomeAmount > expensesAmount && incomeAmount > 0 && foodAmount >=0 && rentAmount >= 0 && clothAmount >= 0){
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = expensesAmount;

        const balanceAmount = document.getElementById('balance-amount');
        balanceAmount.innerText = incomeAmount - foodAmount - rentAmount - clothAmount;
    }else{
        foodInput.value = '';
        rentInput.value = '';
        clothInput.value = '';
        incomeInput.value = '';
    }
}

function save(){
    const saveInput = document.getElementById('save-input');
    const saveValue = saveInput.value;
    const saveAmount = parseInt(saveValue);

    const balanceAmount = document.getElementById('balance-amount').innerText;
    const savingBalance = document.getElementById('saving-balance');
    const remainingAmount = document.getElementById('remaining-amount');

    if(saveAmount <= 100 && saveAmount > 0){
        savingBalance.innerText = ((balanceAmount * saveAmount) / 100).toFixed(2);
        remainingAmount.innerText = (balanceAmount - savingBalance.innerText).toFixed(2);
        saveInput.value = '';
    }else{
        saveInput.value = '';
        savingBalance.innerText = 0;
        remainingAmount.innerText = 0;
    }
}