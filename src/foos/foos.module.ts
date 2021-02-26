import { Module } from '@nestjs/common';
import { FoosService } from './foos.service';
import { FoosController } from './foos.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Foo } from './entities/foo.entity';
import { FooMapperProfile } from './profiles/foo.mapper-profile';

@Module({
  imports: [SequelizeModule.forFeature([Foo])],
  controllers: [FoosController],
  providers: [FoosService, FooMapperProfile],
})
export class FoosModule {}
