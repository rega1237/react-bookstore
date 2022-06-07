import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const valueTitle = e.target.title.value;
    const valueAuthor = e.target.author.value;
    const title = valueTitle;
    const author = valueAuthor;
    dispatch(addBook(title, author));
    e.target.reset();
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form id="addBook" onSubmit={formHandler}>
        <input
          id="title"
          type="text"
          placeholder="Insert Title"
        />
        <input
          id="author"
          type="text"
          placeholder="Insert Author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
