import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {WeeklySchedule} from './weekly-schedule';
import {TimeSlot} from './timeslot';
import {KenpoTime} from './kenpotime';
import {Lesson} from './lesson';

@Injectable()
export class WeeklyScheduleService {
    private url = 'http://idahokenpo:8080/kenpoSchedule/schedule/weeklySchedule?weeklyScheduleId=58b74a9c6c4935b402f8d816';

    constructor (private http: Http) {}

    // private list: TimeSlot[] = [new TimeSlot("id", new KenpoTime("5", "45", true), new KenpoTime("6", "30", true), new Lesson("lessonId", "PRIVATE", "READY", new Set(), "aid", "lessonLinkId")];
    private myMap: Map<string, TimeSlot[]> = new Map(); 
    // {
    //         "MONDAY" : this.list,
    //         "TUESDAY" : this.list,
    //         "THURSDAY" : this.list,
    //         "FRIDAY" : this.list
    //     }

    private weeklySchedule : WeeklySchedule = new WeeklySchedule("id", this.myMap); 

    // getWeeklySchedule(){
         
    // }
    getWeeklySchedule() : Observable<WeeklySchedule> {
        return this.http.get(this.url)
                                .map(this.extractData)
                                .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}