import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Categories } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Categories) private categoryRepository: Repository<Categories>){}

  create(category: CreateCategoryInput): Promise<Categories>{
    let ct = this.categoryRepository.create(category)
    return this.categoryRepository.save(ct)
  }

  findAll(): Promise<Categories[]>{
    return this.categoryRepository.find();
  }

  findOne(id: string): Promise<Categories>{
    return this.categoryRepository.findOne(id);
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    // return this.categoryRepository.update(id, updateCategoryInput);
  }

  remove(id: string) {
    return this.categoryRepository.delete(id);
  }
}