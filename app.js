const express = require('express')
const path = require('path')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Define routes that should not be redirected to index.html
const excludeRoutes = ['/version', '/health']

// Middleware to serve index.html for all routes except the excluded ones
app.use((req, res, next) => {
    if (excludeRoutes.includes(req.url)) {
        return next()
    }
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('/version', (req, res) => {
    res.send('4') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
    // eslint-disable-next-line no-constant-condition
    // if (true) throw('error...  ')
    res.send('ok')
})

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server started on port ${PORT}`)
})
