import { z } from "zod";

export const calculatorDataSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string(),
  calculatorGroup: z.object({
    id: z.string().uuid(),
    key: z.string(),
  }),
  election: z.object({
    id: z.string().uuid(),
    key: z.string(),
  }),
  variant: z.object({
    key: z.string(),
  }),
  intro: z.string(),
});

export type CalculatorData = z.infer<typeof calculatorDataSchema>;
