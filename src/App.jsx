import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useMatch } from 'react-router-dom'

// Components
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import Home from './pages/Home'
import Single from './pages/Single'

const booksData = [
    { id: 'OL5419823M', year: 1934, title: 'Burmese Days' },
    { id: 'OL24953387M', year: 1935, title: "A Clergyman's Daughter" },
    { id: 'OL6803413M', year: 1936, title: 'Keep the Aspidistra Flying' },
    { id: 'OL7359104M', year: 1939, title: 'Coming Up for Air' },
    { id: 'OL38214530M', year: 1945, title: 'Animal Farm' },
    { id: 'OL36632156M', year: 1949, title: 'Nineteen Eighty-Four' },
    {
        id: 'OL35616348M',
        year: 1933,
        title: 'Down and Out in Paris and London',
    },
    { id: 'OL426312M', year: 1937, title: 'The Road to Wigan Pier' },
    { id: 'OL26927856M', year: 1938, title: 'Homage to Catalonia' },
]

const App = () => {
    const match = useMatch('/book/:id')

    const id = match?.params?.id

    const { isLoading, error, data } = useQuery({
        queryKey: ['works', id],
        enabled: !!id,
        queryFn: () =>
            axios
                .get(`https://openlibrary.org/books/${id}.json`)
                .then((res) => res.data),
        staleTime: Infinity,
        gcTime: Infinity,
    })

    let next = null
    let previous = null

    if (id) {
        const booksLength = booksData.length
        const currentIdIndex = booksData.findIndex((item) => item.id === id)
        const previousIndex =
            currentIdIndex === 0 ? booksLength - 1 : currentIdIndex - 1
        const nextIndex =
            currentIdIndex === booksLength - 1 ? 0 : currentIdIndex + 1
        next = booksData[nextIndex]
        previous = booksData[previousIndex]
    }

    console.log({ data })

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error || data?.error) {
        return <ErrorMessage error={error || data?.error} />
    }

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home booksData={booksData} />}
            />
            <Route
                exact
                path="/book/:id"
                element={
                    <Single
                        data={data}
                        next={next}
                        previous={previous}
                    />
                }
            />
        </Routes>
    )
}

export default App
