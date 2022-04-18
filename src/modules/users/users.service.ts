import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create_user.input';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){

    }
    
    async findAll(): Promise<Users[]>{
        return this.userRepository.find()
    }

    async create(user: UserCreateDTO): Promise<Users> {
        let new_user = this.userRepository.create(user)
        return this.userRepository.save(new_user)
    }
}
