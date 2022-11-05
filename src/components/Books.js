import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const books = [{
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  ];
  return (
    <div>
      <Book books={books} />
      <Form />
    </div>
  );
};

export default Books;
