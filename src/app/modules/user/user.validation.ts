import { z } from 'zod';
import { zfd } from 'zod-form-data';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    contact: z.string({ required_error: 'Contact is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    location: z.string({ required_error: 'Location is required' }),
    profile: z.string().optional(),
  }),
});

const updateUserZodSchema = zfd.formData({
  name: zfd.text().optional(),
  contact: zfd.text().optional(),
  email: zfd.text().optional(),
  password: zfd.text().optional(),
  location: zfd.text().optional(),
  profile: zfd.file().optional(),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
