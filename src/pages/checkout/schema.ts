import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, 'required'),
  lastName: z.string().optional(),
  companyName: z.string().optional(),
  countryOrRegion: z.string(),
  street: z.string().min(1, 'required'),
  city: z.string().min(1, 'required'),
  province: z.string().min(1, 'required'),
  phone: z.string().min(1, 'required'),
  email: z.string().email(),
  additionalInfo: z.string().optional(),
  paymentMethod: z.string(),
});

export type Inputs = z.infer<typeof schema>;

export default schema;
