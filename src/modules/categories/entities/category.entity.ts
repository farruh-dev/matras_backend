import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Products } from 'src/modules/products/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';

@ObjectType()
@Entity()
export class Categories {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({nullable: true})
  @Column({nullable: true})
  parent_id: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Products, product => product.category)
  @Field(() => [Products], {nullable: true})
  products: Products[]
}
