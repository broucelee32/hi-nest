import { Controller, Get, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get()
  getAll() {
    return 'Movies all '
  }

  @Get('/:id')
  getOne() {
    return 'movie Id One'
  }
}
