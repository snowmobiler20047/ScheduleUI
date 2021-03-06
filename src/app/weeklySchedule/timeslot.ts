import {Lesson} from './lesson';
import {KenpoTime} from './kenpotime';

export class TimeSlot {
    constructor (
        public timeslotId: string,
        public startTime: KenpoTime,
        public endTime: KenpoTime,
        public lesson: Lesson
    ) { }
}