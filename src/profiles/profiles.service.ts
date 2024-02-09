import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileParams } from './types';
import { Profile } from 'src/entities/Profile';
import { User } from 'src/entities/User';

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(User) private userRepository: Repository<User>) { }

    findProfiles() {
        return this.profileRepository.find()
    }

    async createProfile(userId: number, profileDetails: CreateProfileParams) {
        const user = await this.userRepository.findOneBy({ id: userId })
        if (!user)
            throw new HttpException("user not found, cannot create profile", HttpStatus.BAD_REQUEST)

        const newProfile = this.profileRepository.create({ ...profileDetails, createdAt: new Date() })
        const saveProfile = await this.profileRepository.save(newProfile)
        user.profile = saveProfile;
        return this.userRepository.save(user)
    }
}
