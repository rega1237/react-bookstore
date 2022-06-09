import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addFetchBook } from '../../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const valueTitle = e.target.title.value;
    const valueAuthor = e.target.author.value;
    const title = valueTitle;
    const author = valueAuthor;
    const id = uuidv4();
    dispatch(addFetchBook({ title, author, id }));
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
          required
        />
        <input
          id="author"
          type="text"
          placeholder="Insert Author"
          required
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
