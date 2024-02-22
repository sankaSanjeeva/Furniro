import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'required'),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(1, 'required'),
});

export type Inputs = z.infer<typeof schema>;

export default schema;
