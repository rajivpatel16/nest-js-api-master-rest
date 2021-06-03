
export class FindStudentResponse {
   id: string;
    name: string;
    teacher: string; 
}

export class FindStudentResponseDto {
    id: string;
     name: string;
     teacher: string; 
 }

export class CreateStudentDto {
    name: string;
    teacher_id: string;
}

export class updateStudentDto {
    id: string;
    name: string;
    teacher: string;
}