import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private readonly apiService: MoviesService) {}

  @Post(``)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../../public/uploads/',
      }),
    })
  )
  create(
    @Body() createMovieDto: CreateMovieDto,
    @UploadedFile(new ParseFilePipe({ fileIsRequired: false })) file
  ) {
    file && (createMovieDto.imageUrl = `uploads/${file.filename}`);
    return this.apiService.create(createMovieDto);
  }

  @Get(``)
  findMany(@Query('sort') sort: 'desc' | 'asc') {
    return sort ? this.apiService.findAndSort(sort) : this.apiService.findAll();
  }

  @Get(`:id`)
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(id);
  }

  @Delete(`:id`)
  remove(@Param('id') id: string) {
    return this.apiService.delete(id);
  }

  @Patch(`:id`)
  patch(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.apiService.update(id, updateMovieDto);
  }

  @Get(`uploads/:name`)
  getImage(@Param('name') name: string) {
    return this.apiService.getImage(name);
  }
}
