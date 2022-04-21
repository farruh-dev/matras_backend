import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { CategoriesModule } from 'src/modules/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Products]), CategoriesModule],
  providers: [ProductsResolver, ProductsService]
})
export class ProductsModule {}
