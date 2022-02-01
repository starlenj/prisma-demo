import { User } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const getAllUser = async (): Promise<User[]> => {
  return await prismaContext.prisma.user.findMany();

};
export const createUser = async (validation_date: string, name: string, phone: string, password: string, email: string, status: number, picture: string, lastName: string): Promise<User> => {
  const passwordHashed = bcrypt.hashSync(password, 10);
  return await prismaContext.prisma.user.create({ data: { validation_date, name, phone, password: passwordHashed, lastName, email, picture, status } });
};

export const updateUser = async (name: string, id: number, phone: string, lastName: string, email: string, picture: string): Promise<User> => {
  return await prismaContext.prisma.user.update({ data: { name, phone, lastName, email, picture }, where: { id } });
}

export const checkUser = async (phone: string, password: string): Promise<string> => {
  const checkUser = await prismaContext.prisma.user.findUnique({ where: { phone } });

  if (!checkUser) {
    return "User Not Found";
  }
  const validPassword = await bcrypt.compareSync(checkUser.password, password);

  if (!validPassword) {
    return "Invalid Password";
  }
  const token = jwt.sign(checkUser, process.env.JWT_SECRET || "");

  return token;

}