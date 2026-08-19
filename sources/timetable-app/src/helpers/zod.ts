import { z } from "zod/v4";

export const Zod = {
  parseObject<T extends z.core.$ZodShape>(
    schema: z.ZodObject<T>,
    data: z.core.input<z.ZodObject<T>>,
  ): z.core.output<z.ZodObject<T>> {
    return schema.parse(data);
  },

  safeParseObject<T extends z.core.$ZodShape>(
    schema: z.ZodObject<T>,
    data: z.core.input<z.ZodObject<T>>,
  ): z.ZodSafeParseResult<z.core.output<z.ZodObject<T>>> {
    return schema.safeParse(data);
  },
};
