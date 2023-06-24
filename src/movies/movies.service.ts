import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { CreateMovieDto } from "./dto/create-movie.dto";

@Injectable()
export class MoviesService {
  constructor(private database: DatabaseService) {}

  findAll = () => {
    return this.database.movie.findMany();
  };

  findAndSort = (sort) => {
    return this.database.movie.findMany({
      orderBy: {
        rating: sort,
      },
    });
  };

  findOne = (id) => {
    return this.database.movie.findUnique({
      where: { id },
    });
  };

  create = (data: CreateMovieDto) => {
    return this.database.movie.create({
      data,
    });
  };

  delete = (id) => {
    return this.database.movie.delete({
      where: { id },
    });
  };

  update = (id, body) => {
    return this.database.movie.update({ where: { id }, data: body });
  };

  getImage = (name) => {
    return false;
  };
}
