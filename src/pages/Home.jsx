import React from 'react'

// Components
import BookList from '../components/BookList'

const Home = ({ booksData }) => {
    return (
        <div className="container">
            <div className="author-details">
                <h1>George Orwell</h1>

                <blockquote cite="https://en.wikipedia.org/w/index.php?title=George_Orwell&oldid=1209454977">
                    <p>
                        Eric Arthur Blair (25 June 1903 – 21 January 1950) was
                        an English novelist, essayist, journalist, and critic
                        who wrote under the pen name of George Orwell. His work
                        is characterised by lucid prose, social criticism,
                        opposition to totalitarianism, and support of democratic
                        socialism.
                    </p>
                </blockquote>
            </div>
            <BookList booksData={booksData} />
        </div>
    )
}

export default Home
