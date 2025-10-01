import { Injectable } from '@nestjs/common';
import { Cat } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

  @Injectable()
  export class CatsService {

  constructor(private prisma: PrismaService) {}
  async createCat(data: {
    name: string;
    age: number;
    breed: string;
  }): Promise<Cat> {
    return this.prisma.cat.create({ data });
  }  
  async getCats(): Promise<Cat[]> {
     return this.prisma.cat.findMany();
  }

  async deleteCat(id: number): Promise<void> {
    await this.prisma.cat.delete({ where: { id } });
  }

}
