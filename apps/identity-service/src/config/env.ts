import "dotenv/config";
import z from "zod";

const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().default("3000"),
});

export const env = EnvSchema.parse(process.env);