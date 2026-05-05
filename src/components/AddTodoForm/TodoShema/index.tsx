import { z } from "zod";

const todoSchema = z.object({
  todo: z.string().min(1, { message: "you should enter your Todo first." }),
  dueDate: z.string().min(1, { message: "just select a day" }),
});

export { todoSchema };
