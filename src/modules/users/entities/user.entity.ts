import { Field, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@ObjectType()
@Entity()
export class Users {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column()
    username: string

    @Field()
    @Column()
    password: string

    @Field()
    @CreateDateColumn()
    created_at: Date

    @Field()
    @UpdateDateColumn()
    updated_at: Date
}