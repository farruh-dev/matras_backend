import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field()
  id: string;

  @Field()
  name: string
  
  @Field(() => Int)
  price: number

  @Field(() => Int)
  weight: number

  @Field()
  size: string

  @Field()
  is_available: boolean

  @Field()
  category_id: string
}
