import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customers } from './entities/customer.entity';

@Injectable()
export class CustomersService {

  constructor(@InjectRepository(Customers) private customerRepository: Repository<Customers>){}

  async create(customer: CreateCustomerInput) {
    let c = await this.customerRepository.create(customer);

    if(!c) throw new NotFoundException("Something went wrong")

    return this.customerRepository.save(c)
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: string) {
    const c = await this.customerRepository.findOne(id);

    if(!c) throw new NotFoundException("Customer not found")

    return c;
  }

  async update(id: string, customer: UpdateCustomerInput): Promise<Customers> {
    const c = await this.customerRepository.preload({
      id: id,
      status: customer.status
    });

    if(!c) throw new NotFoundException("Customer not found")

    return this.customerRepository.save(c)
  }

  async remove(id: string) {
    return this.customerRepository.delete(id);
  }
}
