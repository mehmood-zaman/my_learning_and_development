import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
@Controller('auth')
export class UsersController {
  @Post('/sign-up')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
