import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/books';
import './Books.css';

const Book = () => {
  const books = useSelector((state) => state.books.allBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const removeBookHandler = (e) => {
    dispatch(removeBook(e.target.id));
    setTimeout(() => dispatch(fetchBooks()), 1000);
  };
  return (
    <div className="books-list">
      {books.map((book) => (
        <>
          <div className="book-card" key={book.id}>
            <div className="left-side">
              <p className="category">
                {book.category}
              </p>
              <h2 className="main-title">{book.title}</h2>
              <h3 className="author">
                {book.author}
              </h3>
              <button className="main-buttons" type="button" onClick={removeBookHandler} id={book.id}>Remove Book</button>
              <button className="main-buttons" type="button">Comments</button>
              <button className="main-buttons" type="button">Edit</button>
            </div>
            <div className="progress">
              <p className="inside-circle"> 100% </p>
              <p> Completed </p>
            </div>
            <div>
              <p className="current-chapter">CURRENT CHAPTER</p>
              <p className="chapter">Chapter 17</p>
              <button className="right-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Book;
