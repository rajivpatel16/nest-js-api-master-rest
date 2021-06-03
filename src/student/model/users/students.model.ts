import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({tableName: "students"})
export class Students extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.UUID
  })
  teacher_id: string;

  // @Column({
  //   type: DataType.DATE,
  // })
  // createdAt: Date;

  // @Column({
  //   type: DataType.DATE
  // })
  // updatedAt: Date;
}
