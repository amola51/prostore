'use server'
import { convertToPlainObject } from "../utils";
import { prisma } from "@/db/prisma"
import { LATEST_PRODUCTS_LIMIT } from "../constants";
//get letest products

export async function getLetestProducts(){
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' },
    });
    return convertToPlainObject(data);
}

// get single product by it's slug
export async function getProductBySlug(slug: string){
    const data = await prisma.product.findFirst({
        where: {slug: slug}
    });
    return convertToPlainObject(data);
}