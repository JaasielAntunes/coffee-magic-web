import { z } from 'zod'

export const env = z
  .object({
    VITE_API_URL: z.string().url(),
    VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
    MODE: z.enum(['production', 'development', 'test']),
  })
  .parse(import.meta.env)
