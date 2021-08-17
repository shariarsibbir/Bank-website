function inputId(input){
    //input update
    const inputField = document.getElementById(input);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return inputAmount;
};

function updateValue(inputTotal,amount){
    //previous update
    const updateTotal = document.getElementById(inputTotal);
    const previousUpdateTotalText = updateTotal.innerText;
    const previousUpdateTotal = parseFloat(previousUpdateTotalText);
    //total update
    updateTotal.innerText = previousUpdateTotal + amount;
};

function getBalance(){
    //previous balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
};

function updateBalance(amount, isAdd){
    //total update
    const previousBalance = getBalance();
    const balanceTotal = document.getElementById('balance-total');
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + amount;
    }
    else if(isAdd == false){
        balanceTotal.innerText = previousBalance - amount;
    }
};
                        //Get & set deposit
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = inputId('deposit-input');
    if(depositAmount > 0){
        updateValue('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});
                        //Get & set withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = inputId('withdraw-input');
    const currentBalance = getBalance();
    if(withdrawAmount > 0 && currentBalance >= withdrawAmount){
        updateValue('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if(withdrawAmount < 0) {
        console.log('Error! Input positive amount');
    }
    else if(currentBalance < withdrawAmount){
        console.log('You have no sufficient Balance..Please deposit sufficient amount first');
    }
});














