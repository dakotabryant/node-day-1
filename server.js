const express = require('express');
const app = express();
const port = 8080;

app.listen(port, function() {
    console.log(`Listening on Port ${port}`);
})

app.get('/:adjective1/:name/:place/:adjective2/:adjective3/:noun', function(req, res) {

            const madLibObject = {
                adjective1,
                name,
                place,
                adjective2,
                adjective3,
                noun
            } = req.params;

            res.send(`There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and {adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire. Will it end with a bite, or with a stake through the ${noun}?`)
        })
