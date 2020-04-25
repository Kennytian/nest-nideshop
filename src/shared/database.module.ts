import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const isDev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: '4lfj2h@Mongo',
      database: 'nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      logging: isDev,
    }),
  ],
})
export class DatabaseModule {}
