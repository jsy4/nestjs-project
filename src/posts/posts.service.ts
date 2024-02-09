import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import { CreateUserPostParams } from './types';
import { Post } from 'src/entities/Post';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    async createUserPost(userId: number, userPostDetails: CreateUserPostParams) {
        const user = await this.userRepository.findOneBy({ id: userId })
        if (!user)
            throw new HttpException("user is not found. Cannot create post.", HttpStatus.BAD_REQUEST)

        const newPost = this.postRepository.create({ ...userPostDetails, user, createdAt: new Date() })
        return await this.postRepository.save(newPost)
    }

}
