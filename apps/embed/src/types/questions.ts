import { z } from "zod";

export const questionSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  statement: z.string(),
  detail: z.string(),
  tags: z.array(z.string()),
});

export const questionsDataSchema = z.array(questionSchema);

export type Question = z.infer<typeof questionSchema>;
export type QuestionsData = z.infer<typeof questionsDataSchema>;
