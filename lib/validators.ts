import { email, z } from "zod"
import { formatNumberWithDecimal } from "./utils";

// Scheme for inseting product

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), "Price must have exactly two decimal places");

export const insertProductSchema = z.object({
    name : z.string().min(3, 'Name must be at least 3 charactors'),
    slug : z.string().min(3, 'Slug must be at least 3 charactors'),
    category : z.string().min(3, 'Category must be at least 3 charactors'),
    brand : z.string().min(3, 'Brand must be at least 3 charactors'),
    description : z.string().min(3, 'Description must be at least 3 charactors'),
    stock : z.coerce.number(),
    images : z.array(z.string()).min(1, "Product must be at least image"),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,

});

//Scheme for signing users in
export const signInFromScheme = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 charactors'),
});
