const fs = require('fs');
const axios = require('axios')

const config = require("./config")

setInterval(async () => {
    let response = await axios.get(`${config.url}/${config.station}`)
    let data = response.data

    const out = `${data.now_playing.song.title} by ${data.now_playing.song.artist} on ${data.station.name}`

    fs.writeFile(config.file, out, () => {})
}, 10000)