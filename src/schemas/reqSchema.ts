const { z } = require('zod')

exports.getTableSchema = z
    .object({
        serie: z.union([z.literal('a'), z.literal('b')], { errorMap: () => ({ message: 'Série inválida' }) }),
    })
    .strict()
