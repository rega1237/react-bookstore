import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../redux/books/books';
import Book from '../Book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <ul>
      {
      books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))
    }
    </ul>
  );
};

export default BookList;
