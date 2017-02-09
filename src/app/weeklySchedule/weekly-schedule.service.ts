import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {WeeklySchedule} from './weekly-schedule';

@Injectable()
export class WeeklyScheduleService {
    private url = 'http://idahokenpo:8080/kenpoSchedule/weeklySchedule?weeklyScheduleId=589a6b4d6c4935616690190d';

    constructor (private http: Http) {}
    
    
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