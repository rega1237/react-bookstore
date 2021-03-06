import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { useDispatch } from 'react-redux';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { delFetchBook } from '../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id,
  } = props;

  const delBookHandler = () => {
    dispatch(delFetchBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-data">
        <h4 className="book-type">Action</h4>
        <h2 className="book-name">{title}</h2>
        <h4 className="book-author">{author}</h4>
        <ul className="book-action">
          <li>
            <button className="btn-action" type="button">Comments</button>
          </li>
          <li>
            <button className="btn-action" type="button" onClick={delBookHandler}>Remove</button>
          </li>
          <li>
            <button className="btn-action" type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="book-track">
        <div className="book-percentage">
          <CircularProgressBar
            percent={64}
            size={100}
            number={false}
          />
          <div className="book-percentage-data">
            <h3>64%</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className="book-read">
        <p>Current Chapter</p>
        <h3>Chapter 17</h3>
        <button type="button" className="btn-update">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
