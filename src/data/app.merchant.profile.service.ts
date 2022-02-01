import { MerchantProfile } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';


export const createMerchantProfile = async (picture: string, instagram: string, description: string, openingTimes: string, status): Promise<MerchantProfile> => {
    return await prismaContext.prisma.merchantProfile.create({ data: { picture, instagram, description, openingTimes, status } });
};

export const updateMerchant = async (picture, instagram, description, openingTimes, id: number): Promise<MerchantProfile> => {
    return await prismaContext.prisma.merchantProfile.update({ data: { picture, instagram, description, openingTimes }, where: { id } });
}