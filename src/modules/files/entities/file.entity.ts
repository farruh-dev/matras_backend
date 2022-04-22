import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Products } from 'src/modules/products/entities/product.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @Field()
  @Column()
  product_id: string

  @ManyToOne(() => Products, product => product.images)
  @JoinColumn({name: "product_id"})
  @Field(() => Products)
  product: Products

}
