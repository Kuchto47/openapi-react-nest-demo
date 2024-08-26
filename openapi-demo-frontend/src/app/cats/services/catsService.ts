import { CatDto, CatsApi, CreateCatDto, ResponseError } from '../../../generated/demo-sdk';
import {Cat} from "../models/Cat.ts";
import {DemoConfiguration} from "../../utils/api/DemoConfiguration.ts";

export class CatsService {
    constructor(private catsApi: CatsApi) {}

    async createCat(cat: Cat): Promise<Cat> {
        const createCatDto: CreateCatDto = {
            name: cat.name,
            age: cat.age,
            breed: cat.breed
        };

        try {
            const createdCatDto = await this.catsApi.createCat({ createCatDto });

            return {
                name: createdCatDto.name,
                age: createdCatDto.age,
                breed: createdCatDto.breed
            };
        } catch (error) {
            if (error instanceof ResponseError) {
                console.error(`Act on ResponseError create cat: ${error.response.status} - ${error.message}`);
            }
            // ... other Errors handling, could be centralized once pattern is recognized
            throw error
        }

    }

    async getAllCats(): Promise<Cat[]> {
        const cats = await this.catsApi.getAllCats();

        return cats.map((cat: CatDto): Cat => ({
            name: cat.name,
            age: cat.age,
            breed: cat.breed
        }));
    }
}

export default new CatsService(
    new CatsApi(
        new DemoConfiguration({ authenticate: true })
    )
);