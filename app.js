// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  const showOne = {
    title: 'About',
  }
  res.render('show', { show: showOne })
})
app.get('/portfolio', (req, res) => {
  const showTwo = {
    title: 'Portfolio',
  }
  res.render('show', { show: showTwo })
})
app.get('/contact', (req, res) => {
  const showThree = {
    title: 'Contact',
  }
  res.render('show', { show: showThree })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
