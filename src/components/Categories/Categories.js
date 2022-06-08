import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkSt } from '../../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(checkSt());
  };

  return (
    <section>
      <h2>{categories}</h2>
      <button type="button" onClick={clickHandler}>CHECK STATUS</button>
    </section>
  );
};

export default Categories;
