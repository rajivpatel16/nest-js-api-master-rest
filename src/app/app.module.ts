import { Module } from '@nestjs/common';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Students } from '../student/model/users/students.model'


@Module({
  imports: [
    StudentModule,
    TeacherModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'school',
      models: [Students],
      define: {
        timestamps: false
    }
    }),
  ],
})
export class AppModule {
}
