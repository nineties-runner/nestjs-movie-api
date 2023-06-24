import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}
  create(data: CreateUserDto) {
    return this.database.user.create({
      data,
    });
  }

  update(id: string, body: UpdateUserDto) {
    return this.database.user.update({ where: { id }, data: body });
  }

  remove(id: string) {
    return this.database.user.delete({ where: { id } });
  }

  findOne(id: string) {
    return this.database.user.findFirst({ where: { id } });
  }
}
