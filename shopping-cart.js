const cart = [];
const VAT_RATE = 0.075;

function addItem(name, price, quantity = 1) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      cart[i].quantity += quantity;
      return cart[i];
    }
  }
  const item = { name, price, quantity };
  cart.push(item);
  return item;
}

function removeItem(name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      return cart.splice(i, 1)[0];
    }
  }
  return null;
}

function increaseQuantity(name, amount = 1) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      cart[i].quantity += amount;
      return cart[i];
    }
  }
  return null;
}

function decreaseQuantity(name, amount = 1) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      cart[i].quantity -= amount;
      if (cart[i].quantity < 0) cart[i].quantity = 0;
      return cart[i];
    }
  }
  return null;
}

function calculateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  return subtotal;
}

function calculateVAT() {
  return calculateSubtotal() * VAT_RATE;
}

function calculateTotal() {
  return calculateSubtotal() + calculateVAT();
}

function findMostExpensiveItem() {
  if (cart.length === 0) return null;
  let mostExpensive = cart[0];
  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > mostExpensive.price) {
      mostExpensive = cart[i];
    }
  }
  return mostExpensive;
}

function formatCurrency(amount) {
  return `₦${amount.toFixed(2)}`;
}

function displayReceipt() {
  console.log('Shopping Receipt\n');
  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i].name} x${cart[i].quantity} = ${formatCurrency(cart[i].price * cart[i].quantity)}`);
  }
  console.log('\n-------------------');
  console.log(`Subtotal : ${formatCurrency(calculateSubtotal())}`);
  console.log(`VAT : ${formatCurrency(calculateVAT())}`);
  console.log(`Total : ${formatCurrency(calculateTotal())}`);
}

addItem('Milk', 3500, 2);
addItem('Bread', 1800);
addItem('Eggs', 2500, 3);
displayReceipt();
