import { Injectable, NestMiddleware, HttpException } from '@nestjs/common'
import { Request , Response, NextFunction } from 'express'
import { students } from '../../db';

@Injectable()
export class ValidatorStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:NextFunction) {
        const studentId = req.params.studentId;
        const studentExist = students.some((s) => {
            return  s.id === studentId
        })
        if(!studentExist) {
            throw new HttpException("student not found", 404)
        }
        next();
    }
}
