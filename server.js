const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
  res.send('API is up and running')
})

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`)
})
