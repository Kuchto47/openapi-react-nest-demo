import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatDto } from './dto/cat.dto';
import { CatBreed } from './domain/cat-breed.enum';
import { UpdateCatDto } from './dto/update-cat.dto';

@ApiTags('cats')
@Controller('cats')
@ApiBearerAuth()
export class CatsController {
  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  @ApiResponse({ status: 200, description: 'Return all cats.', type: [CatDto] })
  getAllCats(): CatDto[] {
    const cat1: CatDto = new CatDto();
    cat1.name = 'Whiskers';
    cat1.age = 3;
    cat1.breed = CatBreed.SIAMESE;

    const cat2: CatDto = new CatDto();
    cat2.name = 'Garfield';
    cat2.age = 7;
    cat2.breed = CatBreed.BENGAL;

    return [cat1, cat2];
  }

  @Post()
  @ApiOperation({ summary: 'Create a cat' })
  @ApiResponse({
    status: 201,
    description: 'The cat has been successfully created.',
    type: CatDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request. Invalid input data.' })
  createCat(@Body() createCatDto: CreateCatDto): CatDto {
    const createdCat = new CatDto();

    //simulation of validation - not in scope
    if (createCatDto.age < 0) {
      throw new BadRequestException(
        'Age must be a positive number between 0 and 50',
      );
    }

    createdCat.name = createCatDto.name;
    createdCat.age = createCatDto.age;
    createdCat.breed = createCatDto.breed;

    return createdCat;
  }

  @Put()
  @ApiOperation({ summary: 'Update a cat' })
  @ApiResponse({
    status: 200,
    description: 'The cat has been successfully updated.',
    type: CatDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request. Invalid input data.' })
  updateCat(@Body() updateCatDto: UpdateCatDto): CatDto {
    const updatedCat = new CatDto();

    updatedCat.name = updateCatDto.name;
    updatedCat.age = updateCatDto.age;
    updatedCat.breed = updateCatDto.breed;

    return updatedCat;
  }
}
