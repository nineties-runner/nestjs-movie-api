import { DatabaseModule } from "../database/database.module";
import { Module } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { MoviesController } from "./movies.controller";
import { DatabaseService } from "../database/database.service";

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesController],
  providers: [MoviesService, DatabaseService],
})
export class MoviesModule {}
