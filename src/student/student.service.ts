import { Injectable } from '@nestjs/common';
import { students } from '../db'
import { v4  as uuid } from 'uuid'
import { FindStudentResponse,CreateStudentDto, updateStudentDto,FindStudentResponseDto } from '../student/dto/student.dto'
import e from 'express';

@Injectable()
export class StudentService {
    private students = students
    getStudents():FindStudentResponse[] {
        return this.students;
    }

    getStudentById(id: string): FindStudentResponse {
        return this.students.find((item) => item.id == id)
    }

    createStudent(payload:CreateStudentDto) {
        const newStudent = {
            id: uuid(),
            ...payload
        }
        return [
            ...this.students,
            newStudent
        ]
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
