// Budget
const budgetOutput = document.querySelector('.budget-output');
const budgetInput = document.querySelector('.budget-input');
const budgetSubmit = document.querySelector('.budget-submit');
// Income 
const incomeSubmit = document.querySelector('.income-submit');
const incomeInput = document.querySelector('.income-input');
const incomeOutput = document.querySelector('.income-output');
// Income Description
const incomeDescription = document.querySelector('.income-description');
// Expense
const expensesOutput = document.querySelector('.expenses-output');
// Add expense
const addExpenseInput = document.querySelector('.add-expense-input');
const addExpenseBtn = document.querySelector('.add-expense-btn');
//Expense Description
const expenseDescription = document.querySelector('.expense-description')
//Expenses total
const expensesTotal = document.querySelector('.expenses-total');
const expensesTotalOutput = document.querySelector('.expenses-total-output');
// Remaining
const remainingOutput = document.querySelector('.remaining-output');
const calcSubmit = document.querySelector('.calc-submit');
// Income List
const incomeList = document.querySelector('.income-list');
// Create an expense list container
let expenseList = document.querySelector('.expenses-list');
// document.body.appendChild(ul);

// Global Expense Total
let totalExpenses = 0;
let income = 0;
let remaining = 0

const addIncome = () => {
    let li = document.createElement('li');
    incomeList.appendChild(li);
    income += parseFloat(incomeInput.value);
    li.textContent = '$' + parseFloat(income) + ' ' + incomeDescription.value;
    console.log(income)
}

incomeSubmit.addEventListener('click', addIncome)

//add expense function
const addExpense = () => {
    // create an li element
    let li = document.createElement('li');
    //append to list
    expenseList.appendChild(li);
    //append expense amount/description to li
    li.textContent = '$' + parseFloat(addExpenseInput.value) + ' ' + expenseDescription.value;
    //append expense amount to total
    totalExpenses += parseFloat(addExpenseInput.value);
    //output total
    expensesTotalOutput.textContent = '$' + parseFloat(totalExpenses);
}

//Event listeneers
addExpenseBtn.addEventListener('click', addExpense);

//Output total budget
budgetSubmit.addEventListener('click', () => {
    budgetOutput.innerText = '$' + parseFloat(budgetInput.value);
});

//Output total remaining balance
calcSubmit.addEventListener('click', () => {
    remaining = parseFloat(budgetInput.value - totalExpenses);
    remainingOutput.textContent = '$' +  remaining; 
    if (remaining > 0) {
        remainingOutput.style.color = 'green';
    } else if (remaining === 0) {
        remainingOutput.style.color = 'black';
    } else {
        remainingOutput.style.color = 'red';
    }
});

/* 

Todo: 

1. need to add delete/clear functionality
2. clean up css
3. possibly implement local storage functionality to save session

*/