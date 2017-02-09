import {WeeklySchedule} from './weeklySchedule/weekly-schedule';
import {Schedule} from './schedule';

export class Instructor {
    constructor(
        public personId: string,
        public prefix: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public phoneNumber: string,
        public address: string,
        public email: string,
        public lessonCost: string,
        public schedule: Schedule,
        public permenantSchedule: WeeklySchedule
    ) { }
}