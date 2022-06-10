import React from 'react';
import './InputBook.css';
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
    <div className="input-component">
      <h2 className="add-title">ADD NEW BOOK</h2>
      <form id="addBook" onSubmit={formHandler}>
        <input
          className="add-input"
          id="title"
          type="text"
          placeholder="Insert Title"
          required
        />
        <input
          className="add-input"
          id="author"
          type="text"
          placeholder="Insert Author"
          required
        />
        <select className="add-input">
          <option value="" disabled selected>Category</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Biography">Biography</option>
          <option value="Phantasy">Phantasy</option>
        </select>
        <button className="input-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
