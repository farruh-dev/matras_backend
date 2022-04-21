import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string
  
  @Field(() => Int)
  price: number

  @Field(() => Int)
  weight: number

  @Field()
  size: string

  @Field({nullable: true})
  is_available: boolean

  @Field()
  category_id: string
}
