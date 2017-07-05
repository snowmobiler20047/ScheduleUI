import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Instructor } from './instructor';

@Injectable()
export class InstructorService {
    private instructorUrl = 'http://idahokenpo:8080/kenpoSchedule/instructor/instructors';

    constructor (private http: Http) {}
    
    
    getInstructors() : Observable<Instructor[]> {
        return this.http.get(this.instructorUrl)
                                .map(this.extractData)
                                .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        // console.log(body);
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