function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const amountValue = parseFloat(inputField.value);
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const previousTotal = parseFloat(totalElement.innerText);
  totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-amount");
  const prevBalanceTotal = parseFloat(balanceTotal.innerText);
  return prevBalanceTotal;
}
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-amount");
  const prevBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = prevBalanceTotal + amount;
  } else {
    balanceTotal.innerText = prevBalanceTotal - amount;
  }
}
// deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputValue("deposit-amount");
  if (depositAmount > 0) {
    updateTotalField("deposit-balance", depositAmount);
    updateBalance(depositAmount, true);
  } else {
    alert("Could not perform this operation.");
  }
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputValue("withdraw-amount");
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    updateTotalField("withdraw-balance", withdrawAmount);
    updateBalance(withdrawAmount, false);
  } else {
    alert("Could not perform this operation.");
  }
});
