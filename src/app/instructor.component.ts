import { Component, OnInit } from '@angular/core';
import { InstructorService } from './instructor.service';
import { Instructor } from './instructor';
import {WeekIdentifier} from './weeklySchedule/week-identifier';

@Component({
    moduleId: module.id,
    selector: 'instructors',
    template: `
        <h2>Instructors</h2>
        <!-- <input type="text" autoGrow /> -->
        <ul>
            <li *ngFor="let instructor of instructors"> 
            {{instructor.prefix}}.{{instructor.lastName}} {{instructor.personId}}
            {{myVal}} 
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

selectedInstructor: Instructor;

mode = 'Observable';

    constructor(private instructorService: InstructorService){}

    ngOnInit() { this.getInstructors();
                this.getInstructor(); }

    getInstructors() {
        this.instructorService.getInstructors()
        .subscribe(
            instructors => this.instructors = instructors, 
            error => this.errorMessage = <any>error);
        
    }

    getInstructor()
    {
        console.log("This is my log 1", this.instructors);
        if (this.instructors != undefined)
        {
            // this.selectedInstructor = ;
            console.log("This is my log 2", this.instructors);

// schedule = this.selectedInstructor.schedule;
// myMap = this.schedule.weeklyScheduleIdMap;
// myVal = this.myMap.get(new WeekIdentifier(6, 2017, new Date("2017-02-11")));
        }
        
    }
}