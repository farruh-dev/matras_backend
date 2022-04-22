import { Injectable, NotFoundException } from '@nestjs/common';
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

    if(!p) throw new NotFoundException("Something went wrong")

    return this.productRepository.save(p)
  }

  async findAll(): Promise<Products[]> {
    return this.productRepository.find({
      relations: ["images"]
    });
  }

  async findOne(id: string): Promise<Products> {
    const p = await this.productRepository.findOne(id, {
      relations: ["images"]
    });

    if(!p) throw new NotFoundException("Product not found")

    return p;
  }

  async update(id: string, product: UpdateProductInput): Promise<Products> {
    const p = await this.productRepository.preload({
      id: id,
      ...product
    });

    if(!p) throw new NotFoundException("Product not found")

    return p;
  }

  async remove(id: string) {
    return await this.productRepository.delete(id);
  }

  async getCategory(id: string): Promise<Categories>{
    return await this.categoryService.findOne(id)
  }
}
