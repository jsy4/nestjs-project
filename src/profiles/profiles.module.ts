import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Profile } from 'src/entities/Profile';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  controllers: [ProfilesController],
  providers: [ProfilesService]
})
export class ProfilesModule {}
