import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller'
import { StudentService } from './student.service'
import { ValidatorStudentMiddleware } from '../common/middleware/validStudent.middleware'

@Module({
    controllers: [StudentController],
    providers: [StudentService]
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
