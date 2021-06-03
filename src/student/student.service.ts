import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { students } from '../db'
import { v4  as uuid } from 'uuid'
import { FindStudentResponse,CreateStudentDto, updateStudentDto,FindStudentResponseDto } from '../student/dto/student.dto'
import { Students } from './model/users/students.model'



@Injectable()
export class StudentService {
    private students = students
    constructor(
        @InjectModel(Students)
        private studentModel: typeof Students,
      ) {}

    getStudents():FindStudentResponse[] {
        return this.students;
    }

    getStudentById(id: string): FindStudentResponse {
        return this.students.find((item) => item.id == id)
    }

    async createStudent(payload:CreateStudentDto) {
        // const newStudent = {
        //     id: uuid(),
        //     ...payload
        // }
        // return [
        //     ...this.students,
        //     newStudent
        // ]
        try {
            return await this.studentModel.create(payload)
        } catch (e) {
            console.log(e.stack)
        }   
       
    }

    updateStudent(payload:updateStudentDto, studentId:string) {
        let updateStudent: FindStudentResponseDto;

        const updateStudentList = this.students.map((student) => {
            if(student.id === studentId) {
                updateStudent = {
                    id: studentId,
                    ...payload
                }
            }
            else {
                return payload;
            }
        });
        this.students = updateStudentList;
        return updateStudent;
    }
}
