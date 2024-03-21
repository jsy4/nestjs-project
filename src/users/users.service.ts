import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from './types';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    findUsers() {
        return this.userRepository.find({ relations: ['profile', 'posts'] })
    }

    findUser(id: number) {
        return this.userRepository.findOne({ where: { id } })
    }
    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() })
        return this.userRepository.save(newUser)
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        // return this.userRepository.delete({id})
        return this.userRepository.update({ id }, { deletedAt: new Date() })
    }
}
