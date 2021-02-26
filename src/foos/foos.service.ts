import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Foo } from './entities/foo.entity';
import { InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/types';
import { FooDto } from './dto/foo.dto';

@Injectable()
export class FoosService {
  constructor(
    @InjectModel(Foo) private fooModel: typeof Foo,
    @InjectMapper() private mapper: Mapper,
  ) {}

  findOne(id: number) {
    const foo = new Foo();
    foo.bar = 'baz';
    return this.mapper.map(foo, FooDto, Foo);
  }
}
