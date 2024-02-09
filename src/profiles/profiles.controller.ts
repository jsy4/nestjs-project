import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { createProfileDto } from './dtos';

@Controller('profiles')
export class ProfilesController {

    constructor(private profileService: ProfilesService) { }
    @Get()
    getProfiles() {
        return this.profileService.findProfiles();
    }

    @Post(':userId')
    createUserProfile(@Param('userId', ParseIntPipe) userId: number,
    @Body() createProfileDto: createProfileDto) {
        return this.profileService.createProfile(userId, createProfileDto);
    }

}
