const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Add history API fallback middleware, excluding /version and /health
app.use((req, res, next) => {
    if (req.url === '/version' || req.url === '/health') {
        return next()
    }
    history()(req, res, next)
})

app.get('/version', (req, res) => {
    res.send('0') // change this string to ensure a new version deployed
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
