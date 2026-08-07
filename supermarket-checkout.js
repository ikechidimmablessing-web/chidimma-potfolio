const products = ['Rice', 'Bread', 'Milk', 'Sugar', 'Eggs'];
const prices = [4500, 1200, 3800, 1700, 3200];

const formatCurrency = (amount) => `₦${amount.toFixed(2)}`;

function calculateTotalBill() {
  return prices.reduce((total, price) => total + price, 0);
}

function findMostExpensiveProduct() {
  const index = prices.indexOf(Math.max(...prices));
  return products[index];
}

function findCheapestProduct() {
  const index = prices.indexOf(Math.min(...prices));
  return products[index];
}

function getProductsAbove(amount) {
  return products.filter((product, index) => prices[index] > amount);
}

function getProductsBelow(amount) {
  return products.filter((product, index) => prices[index] < amount);
}

console.log('Products\n');
products.forEach((product, index) => console.log(`${product} - ${formatCurrency(prices[index])}`));
console.log(`\nTotal Bill\n${formatCurrency(calculateTotalBill())}`);
console.log(`\nMost Expensive\n${findMostExpensiveProduct()}`);
console.log(`\nCheapest\n${findCheapestProduct()}`);
console.log(`\nProducts Above ₦3000\n${getProductsAbove(3000).join('\n')}`);
console.log(`\nProducts Below ₦2000\n${getProductsBelow(2000).join('\n')}`);
console.log(`\nCount Above ₦3000\n${getProductsAbove(3000).length}`);
