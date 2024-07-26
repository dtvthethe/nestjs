import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'nestdb',
      synchronize: true, // shouldn't be used in production - otherwise you can lose production data.
      autoLoadEntities: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
