const axios = require('axios')

const fetchData = (searchInput) => axios.request
    ({
        method: 'GET',
        url: 'http://localhost:3000/data',
        params: {
            search: searchInput
        }
    })
export default fetchData;