

// zoals steeds "requiren" wat je wil gebruiken
var express = require("express");
var path = require("path");

// Daarna een Express app maken
var app = express();

// een datafile requiren
var dataFile = require('./data/data.json');

// Express vertellen dat je views zich in een folder views bevinden
app.set("views", path.resolve(__dirname, "views"));

// Express vertellen dat je de EJS templating gaat gebruiken
// We moeten ejs ook installeren. Je doet dit via npm install ejs --save
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/werken.ejs', function(req, res) {
  var info = '';
  var teller = 0;
  dataFile.blogposts.forEach(function(item) {
    info += `
    <div class="werk_item">
        <h3><a href="/blog${teller}"> ${item.titel} </a></h2>
    </div>
    `;
    teller++;
  });

  res.render('werken', {
    posts:  `${info}`,
  });
});

app.get('/blog:postid', function(req, res) {
  var blogpost = dataFile.blogposts[req.params.postid];
  var blogpostit = ' ';
  blogpostit += `
    <div class = "post">
      <h2 class="postTitel">${blogpost.titel}</h2>
      <p class="postTekst">${blogpost.tekst}</p>
      <a class="postTerug" href="/werken.ejs">terug</a>
    </div>
  `;

  res.render('blogpost', {
    blogpostt: `${blogpostit}`
  })
});

app.use(express.static('public'))

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() { });
