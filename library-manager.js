const books = [];

function addBook(book) {
  books.push(book);
  return book;
}

function removeBook(id) {
  const index = books.findIndex((book) => book.id === id);
  return index === -1 ? null : books.splice(index, 1)[0];
}

function borrowBook(id) {
  const book = books.find((item) => item.id === id);
  if (!book || !book.available) return null;
  book.available = false;
  return book;
}

function returnBook(id) {
  const book = books.find((item) => item.id === id);
  if (!book || book.available) return null;
  book.available = true;
  return book;
}

function searchByTitle(title) {
  const searchTerm = title.toLowerCase();
  return books.filter((book) => book.title.toLowerCase().includes(searchTerm));
}

function getAvailableBooks() {
  return books.filter((book) => book.available);
}

function displayAvailableBooks() {
  getAvailableBooks().forEach((book) => console.log(`${book.title} by ${book.author}`));
}

function displayBorrowedBooks() {
  books.filter((book) => !book.available).forEach((book) => console.log(`${book.title} by ${book.author}`));
}

function countTotalBooks() {
  return books.length;
}

addBook({ id: 101, title: 'Atomic Habits', author: 'James Clear', available: true });
addBook({ id: 102, title: 'Things Fall Apart', author: 'Chinua Achebe', available: true });
addBook({ id: 103, title: 'The Alchemist', author: 'Paulo Coelho', available: true });

borrowBook(101);
console.log('Available books:');
displayAvailableBooks();
console.log('\nBorrowed books:');
displayBorrowedBooks();
console.log(`\nTotal books: ${countTotalBooks()}`);
