const express = require('express');
const fetch = require('./fetchData.js')
var cheerio = require('cheerio');
var cors = require('cors')
const app = express();
app.use(cors())
const PORT = 3000;

app.use(express.static('../dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

app.get('/data', (req, res) => {
    URL = `https://google.com/search?q=${req.query.search}&num=20`
    fetch.fetchData(URL).then((response) => {
        let html = response.data
        let $ = cheerio.load(html);
        const linkObjects = $('a', html);
        const total = linkObjects.length;
        // The linkObjects has a property named "lenght"

        const links = [];
        // we only need the "href" and "title" of each link

        for (let i = 0; i < total; i++) {
            if (linkObjects[i].attribs.href.includes('url?q=')) {
                let endIndex = linkObjects[i].attribs.href.indexOf('&sa')
                links.push({
                    href: linkObjects[i].attribs.href.slice(0, endIndex),
                    title: linkObjects[i].attribs.title
                });
            }
        }
        console.log(links);
    }).catch(err => {
        console.log(err);
    })
})
// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at ' + JSON.stringify(PORT))
});