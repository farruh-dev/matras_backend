import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => Int)
  index: number

  @Field()
  phone_number: string
}
