import { Component } from '@angular/core'
import { StudentService } from './student.service'

@Component({
    selector: 'students',
    template: `
        <h2>Students</h2>
        {{title}}
        <ul>
            <li *ngFor="let s of students">
            {{ s }}
            </li>
        </ul>
    `,
    providers: [StudentService]
})
export class StudentComponent {
    title = "Student title";
    students;

    constructor (studentService : StudentService){
        this.students = studentService.getStudents();
    }
}

