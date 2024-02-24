import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Single = ({ data, previous, next }) => {
    let { id } = useParams()
    console.log(data)

    const description =
        typeof data?.description === 'string'
            ? data.description
            : data?.description?.value ||
              "This edition doesn't have a description yet."

    return (
        <div className="container">
            <div className="single-wrapper">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to={`/book/${previous.id}`}>{previous.title}</Link>|
                    <Link to={`/book/${next.id}`}>{next.title}</Link>
                </nav>

                <h1>{data.title}</h1>
                <p>{description}</p>
                <p>
                    Genres:{' '}
                    {data.genres?.map((item, idx, arr) => (
                        <span key={item}>
                            {item}
                            {idx === arr.length - 1 ? '' : ', '}{' '}
                        </span>
                    )) || '/'}
                </p>
                <p>
                    Subjects:{' '}
                    {data.subjects?.map((item, idx, arr) => (
                        <span key={item}>
                            {item}
                            {idx === arr.length - 1 ? '' : ', '}{' '}
                        </span>
                    )) || '/'}
                </p>
                <p>
                    openlibrary:{' '}
                    <a
                        href={`https://openlibrary.org/books/${data.key}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {id}
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Single
