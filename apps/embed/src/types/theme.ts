import { z } from "zod";

export const themeDataSchema = z.object({
  name: z.string(),
});

export type ThemeData = z.infer<typeof themeDataSchema>;
