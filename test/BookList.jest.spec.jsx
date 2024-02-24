import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import BookList from '../src/components/BookList'

const booksData = [
    { id: 'OL5419823M', year: 1934, title: 'Burmese Days' },
    { id: 'OL26927856M', year: 1938, title: 'Homage to Catalonia' },
]

describe('<BookList />', () => {
    it('should render items', () => {
        render(
            <BrowserRouter>
                <BookList booksData={booksData} />
            </BrowserRouter>
        )
        expect(screen.getByText('Burmese Days')).toBeVisible()
        expect(screen.getByText('Homage to Catalonia')).toBeVisible()
    })
})
