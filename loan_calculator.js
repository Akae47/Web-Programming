function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(loanTerm) || principal < 0 || interestRate < 0 || loanTerm <= 0) {
        alert('Please enter valid numeric and non-negative values.');
        return;
    }

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm;

    const monthlyPayment = (principal * monthlyInterestRate) / (1 -(1/( Math.pow(1 + monthlyInterestRate, numberOfPayments))));
    const sumOfPayments = monthlyPayment * numberOfPayments;
    const totalInterestPaid = sumOfPayments - principal;

    document.getElementById('monthlyPaymentOutput').textContent = monthlyPayment.toFixed(2);
    document.getElementById('sumOfPaymentsOutput').textContent = sumOfPayments.toFixed(2);
    document.getElementById('totalInterestOutput').textContent = totalInterestPaid.toFixed(2);
}

function clearFields() {
    document.getElementById('principal').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('loanTerm').value = '';
    document.getElementById('monthlyPaymentOutput').textContent = '0.00';
    document.getElementById('sumOfPaymentsOutput').textContent = '0.00';
    document.getElementById('totalInterestOutput').textContent = '0.00';
}
