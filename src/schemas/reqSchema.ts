const { z } = require('zod')

exports.getTableSchema = z
    .object({
        serie: z
            .string({
                required_error: 'serie é obrigatória',
                invalid_type_error: 'serie inválida',
            })
            .min(1)
            .max(1)
            .trim(),
    })
    .strict()
