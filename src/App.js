import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header/Header';
import BooksPage from './pages/BookPage/BookPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <BooksPage />
          </Route>
          <Route path="/categories">
            <CategoriesPage />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
