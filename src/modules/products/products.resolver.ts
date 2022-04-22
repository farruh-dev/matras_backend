import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Products } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Products)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Products)
  createProduct(@Args('product') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Products], { name: 'getAllProducts' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Products, { name: 'getOneProduct' })
  findOne(@Args('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Products)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => Products)
  removeProduct(@Args('id') id: string) {
    return this.productsService.remove(id);
  }

  @ResolveField(() => Products)
  category(@Parent() product: Products){
    return this.productsService.getCategory(product.category_id)
  }
}
