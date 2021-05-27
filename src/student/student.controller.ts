import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common"
import { CreateStudentDto, FindStudentResponse, updateStudentDto, FindStudentResponseDto } from "./dto/student.dto"

@Controller('students')
 export class StudentController {
    @Get()
    getStudents():FindStudentResponse[] {
        return []
    }
    @Get('/:studentId')
    getStudentById( @Param('studentId') studentId: string):FindStudentResponse {
       
        return 
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto) {
        return `created student ${body}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body:updateStudentDto
    ):FindStudentResponseDto {
        return 
    }
}