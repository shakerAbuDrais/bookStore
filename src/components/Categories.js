import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories.status);
  return (
    <div>
      <p>
        { state }
      </p>
      <button onClick={() => dispatch(checkStatus())} type="button"> check status </button>
    </div>
  );
};

export default Categories;
