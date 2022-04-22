import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileInput } from './dto/create-file.input';
import { Files } from './entities/file.entity';

@Injectable()
export class FilesService {

  constructor(@InjectRepository(Files) private fileRepository: Repository<Files>){}

  async create(file){
    let f = this.fileRepository.create(file)
    return this.fileRepository.save(f)
  }
 
  async findAll() {
    return this.fileRepository.find();
  }

  async remove(id: string) {
    return this.fileRepository.delete(id);
  }
}
