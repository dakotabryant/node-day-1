const express = require('express');
const app = express();
const port = 8080;
const cookieParser = require('cookie-parser');
const randomAB = () => ['a', 'b'][Math.floor(Math.random()*2)];
const ABTest = 'a-b-test';
app.use(cookieParser());
app.use(express.static('public'));


app.listen(port, function() {
  console.log(`Listening on Port ${port}`);
});

app.get('/', (req, res) => {
  const cookie = req.cookies[ABTest];
  console.log(req.cookies);
  if (cookie === undefined) {
    res.cookie(ABTest,'BUTTCOOKIES', {});
  }
  res.sendFile(__dirname + '/index.html')
  //        res.cookie('cokkieName',randomNumber, { maxAge: 900000, httpOnly: true })


})

// app.get('/:adjective1/:name/:place/:adjective2/:adjective3/:noun', function(req, res) {
//
//             const madLibObject = {
//                 adjective1,
//                 name,
//                 place,
//                 adjective2,
//                 adjective3,
//                 noun
//             } = req.params;
//
//             res.send(`There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and {adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire. Will it end with a bite, or with a stake through the ${noun}?`)
//         })
