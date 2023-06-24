import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { DatabaseService } from "./../database/database.service";

import { JwtService } from "@nestjs/jwt";
import { AuthEntity } from "./entity/auth.entity";

@Injectable()
export class AuthService {
  constructor(
    private database: DatabaseService,
    private jwtService: JwtService
  ) {}

  async login(name: string): Promise<AuthEntity> {
    const user = await this.database.user.findFirst({ where: { name } });

    if (!user) {
      throw new NotFoundException(`No user found for name: ${name}`);
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
