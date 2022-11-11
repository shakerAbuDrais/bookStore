import { React, useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = () => {
    const book = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          name="authors"
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button onClick={() => handleSubmit()} type="button">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
