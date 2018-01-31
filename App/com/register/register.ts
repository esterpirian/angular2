import { Component, Input} from '@angular/core';
import {MainService } from 'App/service';
/**
 * @title Basic Inputs
 */
@Component({
    selector: 'register-component',
    inputs: ['parentTitle'],
    styleUrls: ['App/com/register/register.css'],
    templateUrl: 'App/com/register/register.html',
   })
export class registerComponent {
    loginData: any;
    ticketCount: any;
    constructor( private _mainService: MainService){
     
        this._mainService.totalTicketCount.subscribe(totalTicketCount => {
            this.ticketCount = totalTicketCount
        });
    }
     bookShow = () => {
        let ticketCount = this.ticketCount;
        this._mainService.totalTicketCount.next(ticketCount);
    }

　
  

　
}

　
　
/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
