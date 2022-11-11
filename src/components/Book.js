import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.books.allBooks);
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
          <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove Book</button>
        </div>
      ))}
    </div>
  );
};

export default Book;
