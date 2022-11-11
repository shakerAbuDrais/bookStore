import React from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const addNewBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const books = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
    };
    dispatch(addBook(books));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form className="form">
        <input type="text" placeholder="Book Title" id="title" />
        <input name="authors" type="text" placeholder="Author" id="author" />
        <button onClick={() => addNewBook()} type="button">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
