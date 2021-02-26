import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Foo extends Model<Foo> {
  @PrimaryKey
  @Column
  public id?: number;

  @Column
  public bar: string;
}
