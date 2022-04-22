import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { Files } from './entities/file.entity';
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import { createWriteStream } from 'fs'
import path  from "path";
import { CreateFileInput } from './dto/create-file.input';

@Resolver(() => Files)
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @Mutation(() => Boolean, {name: "uploadFile"})
  async uploadFile(
    @Args({name: 'file', type: () => GraphQLUpload})
    {
      createReadStream,
      filename
    }: FileUpload
  ): Promise<boolean>{
    return new Promise(async (resolve, reject) => 
      createReadStream()
        .pipe(createWriteStream(path.join("..", "..", "uploads", "files", filename)))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
    )
  }

  @Query(() => [Files], { name: 'getFiles'})
  findAll() {
    return this.filesService.findAll();
  }

  @Mutation(() => Files, {name: "getFile"})
  createFile(@Args("file") createFileInput: CreateFileInput) {
    return this.filesService.create(createFileInput)
  }

  @Mutation(() => Files, {name: "deleteFile"})
  removeFile(@Args('id') id: string) {
    return this.filesService.remove(id);
  }

  @Mutation(() => Files, {name: "deleteFileByProduct"})
  removeFileByProduct(@Args("product_id") id: string){
    return this.filesService.removeByParent(id)
  }
}
