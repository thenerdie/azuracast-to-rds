const fs = require('fs');
const axios = require('axios')

const config = require("./config")

setInterval(async () => {
    try {
        let response = await axios.get(`${config.url}/${config.station}`)
        let data = response.data

        const out = config.text
            .replace(/\[artist\]/g, data.now_playing.song.artist)
            .replace(/\[title\]/g, data.now_playing.song.title)
            .replace(/\[station\]/g, data.station.name)

        fs.writeFile(config.file, out, () => {})
    } catch {
        fs.writeFile(config.file, config.default, () => {})
    }
}, 10000)