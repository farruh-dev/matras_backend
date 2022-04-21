import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({nullable: true})
  parent_id: string;
}
