import React from 'react';

const InputBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Insert Title" />
      <input type="text" placeholder="Insert Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default InputBook;
