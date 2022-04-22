import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from 'src/modules/categories/categories.service';
import { Categories } from 'src/modules/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Products) private productRepository: Repository<Products>,
              private categoryService: CategoriesService){}

  async create(product: CreateProductInput) {
    let p = this.productRepository.create(product);
    return this.productRepository.save(p)
  }

  async findAll() {
    return this.productRepository.find({
      relations: ["images"]
    });
  }

  async findOne(id: string) {
    return this.productRepository.findOne(id, {
      relations: ["images"]
    });
  }

  async update(id: string, product: UpdateProductInput) {
    return this.productRepository.update(id, product);
  }

  async remove(id: string) {
    return this.productRepository.delete(id);
  }

  async getCategory(id: string): Promise<Categories>{
    return this.categoryService.findOne(id)
  }
}
