const { uuid } = require('uuidv4');

const ADDBOOK = 'ADD_BOOK';
const DELBOOK = 'DELBOOK';

export default function bookReducer(state = [], action) {
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
  book: { title, author, id: uuid() },
});

export const delBook = (id) => ({
  type: DELBOOK,
  bookToDel: id,
});
