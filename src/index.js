import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT
const config = { headers: { 'Authorization': `Bearer ${process.env.BITLY_KEY}` } }

app.use(cors())
app.use(express.json())

app.post('/api/shorten', (req, res) => {
  axios.post('https://api-ssl.bitly.com/v4/shorten', { long_url: req.body.longUrl }, config )
    .then(({ data }) => res.json(data.id))
    .catch(err => console.log(err))
})

app.listen(PORT, () =>
  console.log(`url-shortener-proxy-server is listening on port ${PORT}!`)
)
