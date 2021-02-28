import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Foo } from '../entities/foo.entity';
import { FooDto } from '../dto/foo.dto';
import { mapFrom } from '@automapper/core';
import type { Mapper } from '@automapper/types';

@Injectable()
export class FooMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper) => {
      mapper.createMap(Foo, FooDto).forMember(
        (destination) => destination.bar,
        mapFrom((source) => source.bar),
      );
      mapper.createMap(FooDto, Foo).forMember(
        (destination) => destination.bar,
        mapFrom((source) => source.bar),
      );
    };
  }
}
