import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller'
import { StudentService } from './student.service'
import { ValidatorStudentMiddleware } from '../common/middleware/validStudent.middleware'
import { SequelizeModule } from '@nestjs/sequelize';
import { Students } from './model/users/students.model'


@Module({
    imports:  [SequelizeModule.forFeature([Students])],
    controllers: [StudentController],
    providers: [StudentService],
    exports: [SequelizeModule]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidatorStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        });
        consumer.apply(ValidatorStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        });
    }
}
