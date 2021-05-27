import { Controller, Get, Post, Put, Param } from "@nestjs/common"
import { FindTeacherResponseDto, CreateTeacherDto } from "./dto/teacher.dto"

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

    // @Get('/:teacherId/students')
    // getStudentByTeacherId(@Param('teacherId') teacherId: string): { 
    //     return "Get Student By Teacher ID"
    // }

    // @Post()
    // createTeacher() {
    //     return "Teacher created"
    // }

    // @Put('/:teacherId/students/:studentId')
    // updatedTeacher() {
    //     return "updated Teacher"
    // }
}