import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { books } = props;
  const dispatch = useDispatch();
  return (
    <div className="books-list">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <h2>{book.title}</h2>
          <h3>
            Written By
            {book.author}
          </h3>
          <button type="submit" onClick={() => dispatch(removeBook())}>Remove Book</button>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.func.isRequired,
};
export default Book;
