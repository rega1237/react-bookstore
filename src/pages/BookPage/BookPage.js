import React from 'react';
import './BookPage.css';
import BookList from '../../components/BookList/BookList';
import InputBook from '../../components/InputBook/InputBook';

const BooksPage = () => (
  <div className="book-page">
    <div className="book-list-container">
      <BookList />
    </div>
    <div className="input-container">
      <InputBook />
    </div>
  </div>
);
export default BooksPage;
