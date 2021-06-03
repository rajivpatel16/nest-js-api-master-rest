import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe, UsePipes } from "@nestjs/common"
import { CreateStudentDto, FindStudentResponse, updateStudentDto, FindStudentResponseDto } from "./dto/student.dto"
import { StudentService } from "../student/student.service"
import { JoiValidationPipe } from "../common/validations/joi.validations.pipe"
import { userSchema } from "./schema/student.schema"

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
    @UsePipes(new JoiValidationPipe(userSchema))
    async createStudent(@Body() body: CreateStudentDto) {
        return await this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body:updateStudentDto
    ):FindStudentResponseDto {
        return this.studentService.updateStudent(body, studentId)
    }
}
