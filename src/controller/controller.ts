import * as express from 'express'
const { getTableSchema } = require('../schemas/reqSchema')
const { getGroup } = require('../services/htmlParse')
const NodeCache = require('node-cache')
const cacheKey = 'brasileiraoData'
const cache = new NodeCache({ stdTTL: 3600 })

async function getTableController(req: express.Request, res: express.Response) {
    try {
        const requisition = getTableSchema.parse(req.params)

        const cachedData = cache.get(`${cacheKey}_${requisition.serie}`)

        console.log(`${cacheKey}_${requisition.serie}`)

        if (cachedData) {
            return res.status(200).send(cachedData)
        } else {
            const group = await getGroup(requisition)

            let formattedGroup = {
                classificacao: group.classificacao,
                edicao: group.edicao,
                faixas_classificacao: group.faixas_classificacao,
                fase: group.fase,
                fases_navegacao: group.fases_navegacao,
                lista_jogos: group.lista_jogos,
                lista_jogos_unica: group.lista_jogos_unica,
                lista_tipo_unica: group.lista_tipo_unica,
                rodada: group.rodada,
            }

            cache.set(`${cacheKey}_${requisition.serie}`, formattedGroup)
            cache.ttl(`${cacheKey}_${requisition.serie}`, 3600)
            return res.status(200).send(formattedGroup)
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getTableController }
