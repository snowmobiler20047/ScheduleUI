import {WeekIdentifier} from './weeklySchedule/week-identifier';

export class Schedule {
    constructor (
        public weeklyScheduleIdMap: Map<WeekIdentifier, string>
    ) { }
}