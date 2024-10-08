import { useState } from 'react';
import './App.css';
import BookList from './Components/BookList/BookList';
import books from './bookData';

function App() {
  function search(key, value) {
    let found = books.filter((book) => {
      if (typeof books[0][key] === 'string') {
        return book.hasOwnProperty(key) && book[key].includes(value);
      } else if (typeof books[0][key] === 'number') {
        return key !== 'price' ? book[key] === value : book[key] <= value;
      }
    });
    return found;
  }
  return (
    <>
      <form action="">
        <label
          htmlFor="search"
          placeholder="hier deine Suchanfrage eingeben / enter your search here"
        >
          Bücher durchsuchen / search books
        </label>
        <input type="search" name="search" id="search" />
        <label htmlFor="sort">Sortiere / Sort </label>
        <select
          name="sort"
          id="sort"
          onChange={(event) => {
            const sortedBooks = returnValuesSorted(event.target.value);
            setFilteredBooks(sortedBooks);
          }}
        >
          <option value="autor">Autor/innen / Author</option>
          <option value="title">Titel / Title</option>
          <option value="price">Preis / Price</option>
          <option value="publicationyear">
            Erscheinungsjahr / Publication Year
          </option>
        </select>
      </form>
      <BookList books={books} />;
    </>
  );
}

export default App;
