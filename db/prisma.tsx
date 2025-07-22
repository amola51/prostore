import { PrismaClient } from "./../lib/generated/prisma"

export  const prisma = new PrismaClient().$extends({
    result: {
        product: {
            price: {
                compute(product){
                    return product.price.toString();
                }
            },
            rating: {
                compute(product){
                    return product.rating.toString();
                }
            }
        }
    }
});