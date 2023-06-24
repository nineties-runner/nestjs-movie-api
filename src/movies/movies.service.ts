import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { Movie } from "@prisma/client";

@Injectable()
export class MoviesService {
  constructor(private database: DatabaseService) {}

  findAll = (): Promise<Movie[]> => {
    return this.database.movie.findMany();
  };

  findAndSort = (sort): Promise<Movie[]> => {
    return this.database.movie.findMany({
      orderBy: {
        rating: sort,
      },
    });
  };

  findOne = (id): Promise<Movie> => {
    return this.database.movie.findUnique({
      where: { id },
    });
  };

  create = (data: CreateMovieDto): Promise<Movie> => {
    return this.database.movie.create({
      data,
    });
  };

  delete = (id): Promise<Movie> => {
    return this.database.movie.delete({
      where: { id },
    });
  };

  update = (id, body): Promise<Movie> => {
    return this.database.movie.update({ where: { id }, data: body });
  };

  getImage = (name) => {
    return true;
  };
}
