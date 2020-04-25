import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { parse } from 'dotenv';

const isDev = process.env.NODE_ENV !== 'production';
const mongoConfig = process.cwd() + '/src/config/' + (isDev ? 'mongodb.dev' : 'mongodb.prod');
const mongoURl = parse(readFileSync(mongoConfig)).MONGO_URL;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: mongoURl,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      logging: isDev,
    }),
  ],
})
export class DatabaseModule {}
