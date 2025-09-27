import { CatsService } from './cats.service';
import { Cat } from '@prisma/client';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    createCat(data: {
        name: string;
        age: number;
        breed: string;
    }): Promise<Cat>;
    getCats(): Promise<Cat[]>;
}
