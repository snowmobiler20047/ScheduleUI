import {Component} from '@angular/core';
import {InstructorSelectorComponent} from './instructor-selector.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
        <instructors-selector></instructors-selector>
        <WeeklySchedule></WeeklySchedule>
    `,
})
export class HomeComponent {

}