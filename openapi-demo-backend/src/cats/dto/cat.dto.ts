import { ApiProperty } from '@nestjs/swagger';
import { CatBreed } from '../domain/cat-breed.enum';

export class CatDto {
    @ApiProperty({
        description: 'The name of the cat',
        example: 'Whiskers',
        maxLength: 30,
    })
    name: string;

    @ApiProperty({
        description: 'The age of the cat',
        minimum: 0,
        maximum: 50,
        example: 3,
    })
    age: number;

    @ApiProperty({
        description: 'The breed of the cat',
        enum: CatBreed,
        enumName: 'CatBreed',
        example: CatBreed.SIAMESE,
    })
    breed: CatBreed;
}
