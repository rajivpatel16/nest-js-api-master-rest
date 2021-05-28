import { Controller, Get, Post, Put, Param } from "@nestjs/common"
import { FindTeacherResponseDto, CreateTeacherDto } from "./dto/teacher.dto"
import { FindStudentResponse, FindStudentResponseDto } from "../student/dto/student.dto"

@Controller('teachers')

export class TeacherController {
    
    @Get()
    getAllTeachers():FindTeacherResponseDto[] {
        return []
    }
    @Get('/:teacherId')
    getTeachersById(@Param('teacherId') teacherId: string):FindTeacherResponseDto[] {
        return 
    }

    @Get('/:teacherId/students')
    getStudentByTeacherId(@Param('teacherId') teacherId: string):FindStudentResponseDto[] { 
        return 
    }

    @Post()
    createTeacher():CreateTeacherDto {
        return 
    }

    @Put('/:teacherId/students/:studentId')
    updatedTeacher():FindStudentResponse {
        return 
    }
}