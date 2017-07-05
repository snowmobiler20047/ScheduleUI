import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {WeeklySchedule} from './weekly-schedule';
import {WeeklyScheduleService} from './weekly-schedule.service';
import {TimeSlot} from './TimeSlot';
import {MapValuesPipe} from '../utils/map-values.pipe';

@Component({
    selector: 'WeeklyScheduleTable',
    templateUrl: './weekly-schedule-table.component.html'
})
export class WeeklyScheduleTableComponent implements OnInit {
    
    constructor(private weeklyScheduleService: WeeklyScheduleService){}
    weeklySchedule: WeeklySchedule;
    dayToTimeslotMap: Map<string, Array<TimeSlot>>;
    errorMessage;
    mode = 'Observable';

    ngOnInit() { this.getWeeklySchedule();
        // this.dayToTimeslotMap = this.weeklySchedule.dayToTimeslotsMap;
        }


     getWeeklySchedule() {
        this.weeklyScheduleService.getWeeklySchedule()
        .subscribe(
            weeklySchedule => this.weeklySchedule = weeklySchedule, 
            error => this.errorMessage = <any>error);
        
    }
}
