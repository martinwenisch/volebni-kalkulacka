import { z } from "zod";

export const languageDataSchema = z.object({
  name: z.string(),
});

export type LanguageData = z.infer<typeof languageDataSchema>;
