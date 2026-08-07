const products = ['Rice', 'Bread', 'Milk', 'Sugar', 'Eggs'];
const prices = [4500, 1200, 3800, 1700, 3200];

function formatCurrency(amount) {
  return `₦${amount.toFixed(2)}`;
}

function calculateTotalBill() {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

function findMostExpensiveProduct() {
  let expensiveIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[expensiveIndex]) {
      expensiveIndex = i;
    }
  }
  return products[expensiveIndex];
}

function findCheapestProduct() {
  let cheapestIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[cheapestIndex]) {
      cheapestIndex = i;
    }
  }
  return products[cheapestIndex];
}

function getProductsAbove(amount) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (prices[i] > amount) {
      result.push(products[i]);
    }
  }
  return result;
}

function getProductsBelow(amount) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (prices[i] < amount) {
      result.push(products[i]);
    }
  }
  return result;
}

console.log('Products\n');
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]} - ${formatCurrency(prices[i])}`);
}
console.log(`\nTotal Bill\n${formatCurrency(calculateTotalBill())}`);
console.log(`\nMost Expensive\n${findMostExpensiveProduct()}`);
console.log(`\nCheapest\n${findCheapestProduct()}`);
console.log(`\nProducts Above ₦3000\n${getProductsAbove(3000).join('\n')}`);
console.log(`\nProducts Below ₦2000\n${getProductsBelow(2000).join('\n')}`);
console.log(`\nCount Above ₦3000\n${getProductsAbove(3000).length}`);
