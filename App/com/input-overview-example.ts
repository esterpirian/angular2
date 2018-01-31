import { Component, Injectable } from '@angular/core';
import {MainService } from 'App/service';

/**
 * @title Basic Inputs
 */

@Component({
    selector: 'input-overview-example',
    styleUrls: ['App/input-overview-example.css'],
    templateUrl: 'App/input-overview-example.html',
    providers: [MainService]
   

})

export class InputOverviewExample {
    private parentInput: any;
    ticketCount: any;
    ngOnInit() {
        this.parentInput = 'Hello World';
    }

    public constructor(private _mainService: MainService) {
        this._mainService.totalTicketCount.subscribe(totalTicketCount=> {
            this.ticketCount = totalTicketCount
        });

    }
}
//platformBrowserDynamic().bootstrapModule(InputOverviewExample);
//bootstrap(InputOverviewExample);

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
