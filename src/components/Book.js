import React from 'react'

const Book = (props) => {
    const { books } = props
  return (
    <div className="books-list">
        {books.map((book) => (
            <div className="book" key={book.id}>
                <h2>{book.title}</h2>
                <h3>Written By {book.author}</h3>
                <button>Remove Book</button>
    </div>
  ))}
    </div>
)}

export default Book