import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common"
import { CreateStudentDto, FindStudentResponse, updateStudentDto, FindStudentResponseDto } from "./dto/student.dto"
import { StudentService } from "../student/student.service"

@Controller('students')
 export class StudentController {

    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents():FindStudentResponse[] {
        return this.studentService.getStudents()
    }
    @Get('/:studentId')
    getStudentById( @Param('studentId', new ParseUUIDPipe()) studentId: string):FindStudentResponse {
       
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto) {
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body:updateStudentDto
    ):FindStudentResponseDto {
        return this.studentService.updateStudent(body, studentId)
    }
}
