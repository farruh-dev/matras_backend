import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesResolver } from './files.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Files } from './entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Files])],
  providers: [FilesResolver, FilesService],
  exports: [FilesService]
})
export class FilesModule {}
