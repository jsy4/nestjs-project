import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos'

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }
    @Post(':userId')
    createUserPost(
        @Param('userId', ParseIntPipe) userId:number,
        @Body() createPostDto: CreatePostDto) {
        return this.postsService.createUserPost(userId, createPostDto);
    }

}
