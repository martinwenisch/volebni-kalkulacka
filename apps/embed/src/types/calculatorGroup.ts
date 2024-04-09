import { z } from "zod";

export const electionCalculatorSchema = z.object({
  id: z.string(),
  variant: z.object({
    key: z.string(),
  }),
});

export const calculatorGroupDataSchema = z.object({
  id: z.string().uuid(),
  key: z.string(),
  createdAt: z.string(),
  election: z.object({
    id: z.string(),
    key: z.string(),
  }),
  calculators: z.array(electionCalculatorSchema),
});

export type CalculatorGroupData = z.infer<typeof calculatorGroupDataSchema>;
