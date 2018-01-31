import { Component } from '@angular/core';
import { MainService } from 'App/service';

/**
 * @title Basic Inputs
 */
@Component({
    selector: 'login-component',
    inputs: ['parentTitle'],
    styleUrls: ['App/com/login/login.css'],
    templateUrl: 'App/com/login/login.html',
   
})
export class loginComponent implements OnInit {
    
    ticketCount: any ;
    loginData: any ;
    constructor(private _mainService: MainService) {
        this._mainService.totalTicketCount.subscribe(totalTicketCount => {
            this.ticketCount = totalTicketCount
        });
    }
    bookShow = () => {
        this.ticketCount.Password = "23Qwe455";
        let ticketCount = this.ticketCount;// - 1;
        this._mainService.totalTicketCount.next(ticketCount);
    }
    getDataUser = () => {
        this._mainService.getDataUser();
    }

    

   

}

　
　
/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
