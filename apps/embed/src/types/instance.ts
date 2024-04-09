import { z } from "zod";

export const instanceDataSchema = z.object({
  key: z.string(),
});

export type InstanceData = z.infer<typeof instanceDataSchema>;
