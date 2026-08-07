const cart = [];
const VAT_RATE = 0.075;

function addItem(name, price, quantity = 1) {
  const existingItem = cart.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (existingItem) {
    existingItem.quantity += quantity;
    return existingItem;
  }
  const item = { name, price, quantity };
  cart.push(item);
  return item;
}

function removeItem(name) {
  const index = cart.findIndex((item) => item.name.toLowerCase() === name.toLowerCase());
  return index === -1 ? null : cart.splice(index, 1)[0];
}

function increaseQuantity(name, amount = 1) {
  const item = cart.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
  if (!item) return null;
  item.quantity += amount;
  return item;
}

function decreaseQuantity(name, amount = 1) {
  const item = cart.find((entry) => entry.name.toLowerCase() === name.toLowerCase());
  if (!item) return null;
  item.quantity = Math.max(0, item.quantity - amount);
  return item;
}

function calculateSubtotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateVAT() {
  return calculateSubtotal() * VAT_RATE;
}

function calculateTotal() {
  return calculateSubtotal() + calculateVAT();
}

function findMostExpensiveItem() {
  return cart.reduce((mostExpensive, item) => item.price > mostExpensive.price ? item : mostExpensive, cart[0]) || null;
}

function formatCurrency(amount) {
  return `₦${amount.toFixed(2)}`;
}

function displayReceipt() {
  console.log('Shopping Receipt\n');
  cart.forEach((item) => console.log(`${item.name} x${item.quantity} = ${formatCurrency(item.price * item.quantity)}`));
  console.log('\n-------------------');
  console.log(`Subtotal : ${formatCurrency(calculateSubtotal())}`);
  console.log(`VAT : ${formatCurrency(calculateVAT())}`);
  console.log(`Total : ${formatCurrency(calculateTotal())}`);
}

addItem('Milk', 3500, 2);
addItem('Bread', 1800);
addItem('Eggs', 2500, 3);
displayReceipt();
