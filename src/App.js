import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import BooksPage from './pages/BookPage/BookPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <BooksPage />
        </Route>
        <Route path="/categories">
          <CategoriesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
