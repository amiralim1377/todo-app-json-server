import { z } from "zod";

const todoSchema = z.object({
  todo: z
    .string()
    .min(1, { message: "you should enter your Todo first." })
    .max(20, { message: "at least 20 characters" }),
  dueDate: z.string().min(1, { message: "just select a day" }),
});

export { todoSchema };
