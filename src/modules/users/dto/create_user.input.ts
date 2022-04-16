import {  Field, InputType } from "@nestjs/graphql";


@InputType()
export class UserCreateDTO{
    @Field()
    username: string

    @Field()
    password: string
}