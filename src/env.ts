import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    DB_NAME: z.string().min(1),
    NODE_ENV: z.string().optional(),
    NEXTAUTH_SECRET: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    DB_NAME: process.env.DB_NAME,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
})
