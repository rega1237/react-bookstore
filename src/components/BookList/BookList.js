import { useSelector } from 'react-redux';
import Book from '../Book/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);

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
