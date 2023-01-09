const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

const authRoute = require('./routes/auth')
const blogRoute = require('./routes/blogs')

app.use(cors())
app.use('/auth',authRoute)

app.use('/blog',blogRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})