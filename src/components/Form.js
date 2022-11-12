import { React, useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = () => {
    const book = {
      item_id: Math.floor(Math.random() * 100),
      title,
      author,
      category: 'Action and Adventure',
    };
    dispatch(addBook(book));
    setTimeout(() => dispatch(fetchBooks()), 500);
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h1 className="h1">ADD NEW BOOK</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input1"
        />
        <input
          name="authors"
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="input2"
        />
        <button className="form-button" onClick={() => handleSubmit()} type="button">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
