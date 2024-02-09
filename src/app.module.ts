import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './entities/Profile';
import { ProfilesModule } from './profiles/profiles.module';
import { Post } from './entities/Post';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'username',
      password: 'password1',
      database: 'nestjs-project',
      entities: [User, Profile, Post],
      synchronize: true
    }),
    UsersModule, ProfilesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
