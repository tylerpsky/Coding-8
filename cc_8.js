//Task 1

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

console.log(calculateSalary(5000, 500, 0.1)); 
console.log(calculateSalary(7000, 1000, 0.15)); 

//Task 2

const calculateDiscount = function (price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}

console.log(calculateDiscount(100, 0.2));
console.log(calculateDiscount(250, 0.15));

//Task 3

const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0.05; 

    if (serviceType === "Premium") {
        feeRate = 0.15;
    } else if (serviceType === "Standard") {
        feeRate = 0.10;
    }

    return `Service Fee: $${(amount * feeRate).toFixed(2)}`;
};

console.log(calculateServiceFee(200, "Premium")); 
console.log(calculateServiceFee(500, "Standard")); 