import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customers } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Resolver(() => Customers)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customers)
  createCustomer(@Args('customer') createCustomerInput: CreateCustomerInput) {
    return this.customersService.create(createCustomerInput);
  }

  @Query(() => [Customers], { name: 'getCustomers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Query(() => Customers, { name: 'getCustomer' })
  findOne(@Args('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Mutation(() => Customers, {name: "updateCustomer"})
  updateCustomer(@Args('customer') updateCustomerInput: UpdateCustomerInput) {
    return this.customersService.update(updateCustomerInput.id, updateCustomerInput);
  }

  @Mutation(() => Customers, {name: "deleteCustomer"})
  removeCustomer(@Args('id') id: string) {
    return this.customersService.remove(id);
  }
}
