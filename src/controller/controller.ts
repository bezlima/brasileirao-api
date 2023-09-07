import * as express from 'express'
const { getTableSchema } = require('../schemas/reqSchema')
const { getGroup } = require('../services/htmlParse')

async function getTableController(req: express.Request, res: express.Response) {
    try {
        const requisition = getTableSchema.parse(req.params)

        const group = await getGroup(requisition)

        res.status(200).send({
            classificacao: group.classificacao,
            edicao: group.edicao,
            faixas_classificacao: group.faixas_classificacao,
            fase: group.fase,
            fases_navegacao: group.fases_navegacao,
            lista_jogos: group.lista_jogos,
            lista_jogos_unica: group.lista_jogos_unica,
            lista_tipo_unica: group.lista_tipo_unica,
            rodada: group.rodada,
        })
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getTableController }
