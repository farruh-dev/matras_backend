import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Categories } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Categories) private categoryRepository: Repository<Categories>){}

  async create(category: CreateCategoryInput): Promise<Categories>{
    let ct = await this.categoryRepository.create(category)

    if(!ct) throw new NotFoundException("Something went wrong")

    return this.categoryRepository.save(ct)
  }

  async findAll(): Promise<Categories[]>{
    return await this.categoryRepository.find({
      relations: ["products"]
    });
  }

  async findOne(id: string): Promise<Categories>{
    const ct = await this.categoryRepository.findOne(id, {
      relations: ["products"]
    });

    if(!ct) throw new NotFoundException("Category not found")

    return ct
  }

  async update(id: string, category: UpdateCategoryInput) {
    const ct = await this.categoryRepository.preload({
      id: id,
      ...category
    });

    if(!ct) throw new NotFoundException("Category not found")

    return this.categoryRepository.save(ct)
  }

  async remove(id: string) {
    return await this.categoryRepository.delete(id);
  }
}
