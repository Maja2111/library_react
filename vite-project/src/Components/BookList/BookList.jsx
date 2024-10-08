import React, { useState } from 'react';

/**
 * @import von books
 * @function returnValues übergibt Objekte mit der .map() Funktion und gibt die entsprechenden Daten in einem neuen Array aus
 * @function returnValuesSorted das neue Array wird hier sortiert, im Fall von:
 *  if wird die Eingabe auf einen string überprüft und in alphabetischer Reihenfolge zurück gegeben
 * else if wird auf eine Nummer geprüft und der Ternary gibt an in welcher Reihenfolge die Zahlen ausgegeben werden
 * else deckt alle anderen Fälle ab für den Fall das die Bibilothek erweitert wird
 * */

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState(null);
  const [sortedBooks, setSortedBooks] = useState(false);

  function returnValues(key) {
    const values = books.map((book, i) => {
      return book[key];
    });
    // wenn es autor:innen sind als Einzigesartiges if und alle anderen nur Values ausgeben else
    const uniques = [];
    values.forEach((value) => {
      if (!uniques.includes(value)) uniques.push(value);
    });
    return key === 'author' ? uniques : values;
  }

  function returnValuesSorted(key, order = 'asc') {
    if (typeof books[0][key] === 'string') {
      return returnValues(key).sort();
    } else if (typeof books[0][key] === 'number') {
      return returnValues(key).sort((a, b) =>
        order === 'asc' ? a - b : b - a
      );
    }
    return returnValues(key);
  }
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredBooks(filteredBooks);
    if (filteredBooks.length === 0) {
      setError('Keine Ergebnisse gefunden / No results found');
    } else {
      setError(null);
    }
  };

  const handleSort = (event) => {
    const sortedBooks = returnValuesSorted(event.target.value);
    setFilteredBooks(sortedBooks);
    setSorted(true);
    return (
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <h2>{book.title}</h2>
            <img src={book.image} alt={book.title} />
            <h3>{book.author}</h3>
            <p>€ {book.price}</p>
          </li>
        ))}
      </ul>
    );
  };
};

export default BookList;
