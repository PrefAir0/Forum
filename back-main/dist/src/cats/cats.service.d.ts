import { Cat } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class CatsService {
    private prisma;
    constructor(prisma: PrismaService);
    createCat(data: {
        name: string;
        age: number;
        breed: string;
    }): Promise<Cat>;
    getCats(): Promise<Cat[]>;
}
