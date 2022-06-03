import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="book-container">
      <div className="book-data">
        <h4 className="book-type">Action</h4>
        <h2 className="book-name">{title}</h2>
        <h4 className="book-author">{author}</h4>
        <ul className="book-action">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-track">
        <div className="book-percentage">
          <h3>64%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-read">
        <p>Current Chapter</p>
        <h3>Chapter 17</h3>
        <a href="/otherpage">UPDATE PROGRESS</a>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
