import React, { useState } from 'react';
import Book from '../Book/Book';

const BookList = () => {
  const [books] = useState([{
    key: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    key: 2,
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
  },
  {
    key: 3,
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
  }]);

  return (
    <ul>
      {
      books.map((book) => (
        <Book
          key={book.key}
          title={book.title}
          author={book.author}
        />
      ))
    }
    </ul>
  );
};

export default BookList;
