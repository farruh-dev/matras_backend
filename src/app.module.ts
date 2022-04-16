import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({isGlobal: true}),
    GraphQLModule.forRoot(
      {
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/graphql_schema.gql'),
      }
    ),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST,
        port: 5432,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
