import React from 'react'
import { Link } from 'react-router-dom'

const ErrorMessage = ({ error }) => (
    <div data-testid="error">
        <p>An error occured: {error.toString()}</p>
        <Link to="/">Go home</Link>
    </div>
)

export default ErrorMessage
