import {Component, OnInit} from '@angular/core';
import {InstructorService} from './instructor.service';
import { Instructor } from './instructor';

@Component({
    moduleId: module.id,
    selector: 'instructors-selector',
    template: `
        <div> 
            <select>
                <option *ngFor="let instructor of instructors">
                    {{instructor.prefix}}.{{instructor.lastName}}
                </option>
            </select>
        </div>
    `,
    providers: [InstructorService],
    styles: ['.error {color:red;}']
})
export class InstructorSelectorComponent implements OnInit {
    errorMessage: string;
    instructors: Instructor[];
    mode = 'Observable';

    constructor(private instructorService: InstructorService){}

    ngOnInit() { this.getInstructors(); }

    getInstructors() {
        this.instructorService.getInstructors()
        .subscribe(
            instructors => this.instructors = instructors, 
            error => this.errorMessage = <any>error);
        
    }
}