const fs = require('fs');
const axios = require('axios')
const handlebars = require('handlebars')

const config = require("./config")

const templateText = fs.readFileSync("./template.txt", "utf8")
const template = handlebars.compile(templateText)

setInterval(async () => {
    try {
        let response = await axios.get(`${config.url}/${config.station}`)
        let data = response.data

        const out = template(data)

        fs.writeFile(config.file, out, () => {})
    } catch {
        fs.writeFile(config.file, config.default, () => {})
    }
}, 10000)