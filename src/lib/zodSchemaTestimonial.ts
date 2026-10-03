import { z } from 'zod';

export const testimonialSchema = z.object({
  name: z.string().max(112).nonempty('Esse campo e obrigatório'),
  testimonial: z
    .string()
    .min(32, 'Depoimento deve conter no mínimo 32 e no máximo 244 caracteres')
    .max(244, 'Depoimento deve conter no mínimo 32 e no máximo 244 caracteres')
    .nonempty('Esse campo e obrigatório'),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;
