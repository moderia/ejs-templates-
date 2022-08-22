const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Home"
  var heading = "Mohameds Favorite Things"
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/Basketball', (req, res) => {
  var title = "Mohameds Favorite basketball teams is the Warriors"
  var heading = 'My Website'
  res.render('pages/basketball',{
    'title':title,
    'heading':heading
  })
})

app.get('/music', (req, res) => {
  var title = "My favorite album to drop this year was love, Damini"
  var heading = 'My Website'
  res.render('pages/music',{
    'title':title,
    'heading':heading
  })
})

app.get('/artist', (req, res) => {
  var title = "Favorite artist right now is Burna Boy"
  var heading = 'My Website'
  res.render('pages/artist',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})