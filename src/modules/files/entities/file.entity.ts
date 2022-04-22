import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Files {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column({length: 256})
  name: string

  @Field()
  @Column({length: 42})
  src: string

  @Field(() => Int)
  @Column()
  size: number

  @Field()
  @Column({length: 6})
  ext: string

  @Field()
  @Column({length: 16})
  mimetype: string

  @CreateDateColumn()
  created_at: Date
}
