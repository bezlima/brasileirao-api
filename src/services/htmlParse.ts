import axios from 'axios'
const { BaseURL } = require('./baseURL')
const cheerio = require('cheerio')

interface TypeValidData {
    serie: string
}

async function getGroup(validData: TypeValidData) {
    const getHTML = await axios.get(BaseURL(validData.serie))

    const $ = cheerio.load(getHTML.data)

    const scriptTag = $('script:contains("const classificacao")')

    const scriptText = scriptTag.text()

    const regex = /const\s+classificacao\s*=\s*({[^;]+});/s

    const match = scriptText.match(regex)

    const index = match[1]

    const group = JSON.parse(index)

    if (match) {
        return group
    } else {
        throw new Error('Classificação não foi encontrada.')
    }
}

module.exports = { getGroup }
