import { Merchant, User } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';
import * as bcrypt from "bcrypt";

export const getAllMerchant = async (): Promise<Merchant[]> => {
    return await prismaContext.prisma.merchant.findMany();

};
export const createMerchant = async (validation_date: string, profileId: number, optionsId: number, password: string, email: string, status: number, menuId, phone: string): Promise<Merchant> => {
    const passwordHashed = bcrypt.hashSync(password, 10);
    return await prismaContext.prisma.merchant.create({ data: { validation_date, password: passwordHashed, email, status, profileId, optionsId, menuId, phone } });
};

export const updateMerchant = async (email: string, id: number): Promise<Merchant> => {
    return await prismaContext.prisma.merchant.update({ data: { email }, where: { id } });
}