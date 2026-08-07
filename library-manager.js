const books = [];

function addBook(book) {
  books.push(book);
  return book;
}

function removeBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books.splice(i, 1)[0];
    }
  }
  return null;
}

function borrowBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id && books[i].available) {
      books[i].available = false;
      return books[i];
    }
  }
  return null;
}

function returnBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id && !books[i].available) {
      books[i].available = true;
      return books[i];
    }
  }
  return null;
}

function searchByTitle(title) {
  const searchTerm = title.toLowerCase();
  const results = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase().includes(searchTerm)) {
      results.push(books[i]);
    }
  }
  return results;
}

function getAvailableBooks() {
  const availableBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].available) {
      availableBooks.push(books[i]);
    }
  }
  return availableBooks;
}

function displayAvailableBooks() {
  const availableBooks = getAvailableBooks();
  for (let i = 0; i < availableBooks.length; i++) {
    console.log(`${availableBooks[i].title} by ${availableBooks[i].author}`);
  }
}

function displayBorrowedBooks() {
  for (let i = 0; i < books.length; i++) {
    if (!books[i].available) {
      console.log(`${books[i].title} by ${books[i].author}`);
    }
  }
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
