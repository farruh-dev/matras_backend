import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Categories } from 'src/modules/categories/entities/category.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Products {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string
  
  @Field(() => Int)
  @Column()
  price: number

  @Field(() => Int)
  @Column()
  weight: number

  @Field()
  @Column()
  size: string

  @Field()
  @Column("boolean", {default: true})
  is_available: boolean = true

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Categories, category => category.products)
  @JoinColumn({name: "category_id"})
  @Field(() => Categories)
  category: Categories

  @Field()
  @Column()
  category_id: string

}
