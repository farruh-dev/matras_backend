import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Products) private productRepository: Repository<Products>){}

  create(product: CreateProductInput) {
    let p = this.productRepository.create(product);
    return this.productRepository.save(p)
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOne(id);
  }

  update(id: string, product: UpdateProductInput) {
    return this.productRepository.update(id, product);
  }

  remove(id: string) {
    return this.productRepository.delete(id);
  }
}
