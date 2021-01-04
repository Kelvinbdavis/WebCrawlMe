const axios = require('axios')

const fetchData = async (url) => {
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));
    return response
}

module.exports = {
    fetchData
}