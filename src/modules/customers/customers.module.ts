import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  providers: [CustomersResolver, CustomersService]
})
export class CustomersModule {}
