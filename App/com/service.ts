import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';

　
@Injectable()

export class MainService {
    //totalTicketCount: BehaviorSubject<number> = new BehaviorSubject<number>(10);
    loginObj = { UserName: 'ester', Password: '1234' };
    totalTicketCount: BehaviorSubject<loginObj> = new BehaviorSubject<loginObj>(this.loginObj);
    constructor(private http: Http) { }
    public getDataUser() {
        this.http.post("PostBank.UI.Login.jsdata/GetUserData").toPromise().then(
            response => this.totalTicketCount.next(response.json())
            ).catch();

    }
}
