import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoosModule } from './foos/foos.module';
import { AutomapperModule } from '@automapper/nestjs';
import { sequelize } from '@automapper/sequelize';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: sequelize() }],
      singular: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    FoosModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
