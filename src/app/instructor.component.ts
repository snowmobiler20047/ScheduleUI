import { Component, OnInit } from '@angular/core'
import { InstructorService } from './instructor.service'
import { Instructor } from './instructor';

@Component({
    moduleId: module.id,
    selector: 'instructors',
    template: `
        <h2>Instructors</h2>
        <!-- <input type="text" autoGrow /> -->
        <ul>
            <li *ngFor="let instructor of instructors"> 
            {{instructor.prefix}}.{{instructor.lastName}} {{instructor.personId}}
            {{instructor.schedule.weeklyScheduleIdMap["0"]}} {{instructor.schedule}} {{instructor.permenantSchedule}}
            <WeeklyScheduleTable></WeeklyScheduleTable>
            </li>
        </ul>
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
export class InstructorComponent implements OnInit {
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