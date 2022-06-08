import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'react-bookstore/books/ADDBOOK';
const DELBOOK = 'react-bookstore/books/DELBOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien',
  },
  {
    id: uuidv4(),
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
  },
];

export default function bookReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDBOOK:
      return [...state,
        { title: action.book.title, author: action.book.author, id: action.book.id },
      ];
    case DELBOOK:
      return state.filter((st) => st.id !== action.bookToDel);
    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADDBOOK,
  book: { title, author, id: uuidv4() },
});

export const delBook = (id) => ({
  type: DELBOOK,
  bookToDel: id,
});
