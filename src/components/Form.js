import React from 'react';
import './Form.css';

const Form = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <form className="form">
      <input type="text" placeholder="Book Title" />
      <select name="authors">
        <option value="author1">Author 1</option>
        <option value="author2">Author 2</option>
        <option value="author3">Author 3</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
