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
    const fooDto = new FooDto();
    fooDto.bar = 'baz';
    fooDto.id = 1;
    const newFoo = this.mapper.map(fooDto, Foo, FooDto);
    console.log(newFoo);
    console.log('yea the first conversion works!');

    const foo = new Foo();
    foo.bar = 'lala';
    foo.id = 2;
    const newFooDto = this.mapper.map(foo, FooDto, Foo);
    console.log(newFooDto);
    return newFoo;
    console.log('this one is empty');
  }
}
