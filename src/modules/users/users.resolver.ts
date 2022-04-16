import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateDTO } from './dto/create_user.input';
import { Users } from './entities/user.entity';
import { UsersService } from './users.service';
import { UnprocessableEntityException } from '@nestjs/common';

@Resolver(() => Users)
export class UsersResolver {

    constructor(private userService: UsersService){}

    @Query(() => [Users], { name: "getAllUsers" })
    async findAll(){
        return await this.userService.findAll()
    }

    @Mutation(() => Users, { name: "createUser"})
    async create(@Args("user") user: UserCreateDTO){
        const all_users = await this.findAll()

        if(all_users.length != 0){
            throw new UnprocessableEntityException("Cannot create more than limitation")
        }

        return this.userService.create(user)
    }
}
