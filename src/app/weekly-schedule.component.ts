import { Component, OnInit} from '@angular/core';
import {WeeklyScheduleTableComponent} from './weeklySchedule/weekly-schedule-table.component';
import {WeeklyScheduleService} from './weeklySchedule/weekly-schedule.service';
import {WeeklySchedule} from './weeklySchedule/weekly-schedule';

@Component ({
    selector: 'WeeklySchedule',
    templateUrl: './weekly-schedule.component.html'
})
export class WeeklyScheduleComponent  implements OnInit {
    
    weeklySchedule: WeeklySchedule;
    errorMessage: string;
    
    constructor (private weeklyScheduleService: WeeklyScheduleService){ }

    ngOnInit() { this.getWeeklySchedule(); }

    getWeeklySchedule() {
        this.weeklyScheduleService.getWeeklySchedule()
        .subscribe(
            weeklySchedule => this.weeklySchedule = weeklySchedule, 
            error => this.errorMessage = <any>error);
        
    }

}

