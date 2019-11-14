import { Injectable, ConflictException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { environment } from 'environment';
import { User } from 'prisma';
import { UserService } from 'app/user/user.service';
import { CreateUserDTO } from 'app/models/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public async register(signup: CreateUserDTO) {
    try {
      const password = await hash(signup.password, environment.salt);
      const user = await this.userService.createUser({ ...signup, password });
      return user;
    } catch (err) {
      throw new ConflictException({ message: 'User Already Exist' });
    }
  }

  public async validateUser(username: string, pass: string): Promise<Partial<User> | null> {
    const user = await this.userService.findOne({ username });
    if (!user || !(await compare(pass, user.password))) return null;
    const { password, ...result } = user;
    return result;
  }
}
