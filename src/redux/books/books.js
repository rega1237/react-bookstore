const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hknKVgAmPk30ETdQlybN/books';
const ADDBOOK = 'react-bookstore/books/ADDBOOK';
const DELBOOK = 'react-bookstore/books/DELBOOK';
const GETBOOK = 'react-bookstore/books/GETBOOK';

export default function bookReducer(state = [], action = {}) {
  switch (action.type) {
    case GETBOOK:
      return [...action.books];
    case ADDBOOK:
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.id,
        },
      ];
    case DELBOOK:
      return state.filter((st) => st.id !== action.bookToDel);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADDBOOK,
  book,
});

export const delBook = (id) => ({
  type: DELBOOK,
  bookToDel: id,
});

export const getBook = (books) => ({
  type: GETBOOK,
  books,
});

export const fetchBook = () => (dispatch) => {
  const bookList = [];
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      const entriesData = Object.entries(result);
      entriesData.forEach((value) => {
        bookList.push({
          title: value[1][0].title,
          author: value[1][0].author,
          category: value[1][0].category,
          id: value[0],
        });
      });
      dispatch(getBook(bookList));
    });
};

export const addFetchBook = (book) => async (dispatch) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: '',
      },
    ),
  });
  if (post.status === 201) {
    dispatch(addBook(book));
  }
};

export const delFetchBook = (id) => async (dispatch) => {
  const delUrl = `${url}/${id}`;
  const delBookFetch = await fetch(delUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  if (delBookFetch.status === 201) {
    dispatch(delBook(id));
  }
};
