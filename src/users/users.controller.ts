import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dtos'

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }
    @Get()
    getUsers() {
        return this.userService.findUsers();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Patch(':id')
    updateUserById(
        @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto : UpdateUserDto){
        return this.userService.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    DeleteUserById(
        @Param('id', ParseIntPipe) id: number ){
        return this.userService.deleteUser(id)
    }

}
