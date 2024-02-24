import React from 'react'
import { Link } from 'react-router-dom'

const BookList = ({ booksData }) => {
    return (
        <ul className="list-container">
            {booksData.map((book) => (
                <li
                    className="list-item"
                    key={book.id}
                >
                    <div className="book-stripe"></div>
                    <Link to={`/book/${book.id}`}>
                        <h2 className="list-item-name">{book.title}</h2>
                        <p className="list-item-year">{book.year}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default BookList
