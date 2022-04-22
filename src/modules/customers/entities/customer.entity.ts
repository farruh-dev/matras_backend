import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Customers {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => Int)
  @Column()
  index: number

  @Field()
  @Column({length: 12})
  phone_number: string

  @Field()
  @Column("boolean", {default: false})
  status: boolean = false

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
