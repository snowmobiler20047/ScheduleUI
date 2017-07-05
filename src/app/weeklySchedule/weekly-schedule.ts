import {TimeSlot} from './timeslot';


export class WeeklySchedule {
    constructor (
        public weeklyScheduleId: string,
        public dayToTimeslotsMap: Map<string, Array<TimeSlot>>
    ) { }

}