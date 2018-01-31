import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
   
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import {InputOverviewExample } from './input-overview-example';
import {loginComponent } from 'App/com/login/login';
import {registerComponent } from 'App/com/register/register';

import {HttpModule } from '@angular/http';
import {CdkTableModule } from '@angular/cdk/table';
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/toPromise';
const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: loginComponent },
    { path: 'register', component: registerComponent },
];

@NgModule({
    exports: [
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
      
        MatFormFieldModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ]
})
export class PlunkerMaterialModule {}

@NgModule({

    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        PlunkerMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],

    declarations: [InputOverviewExample, loginComponent, registerComponent],
    bootstrap: [InputOverviewExample],
   // providers: [APP_BASE_HREF]
    providers:[
        { provide:APP_BASE_HREF , useValue: '/' },
      
    ]

　
})
export class PlunkerAppModule { }

platformBrowserDynamic().bootstrapModule(PlunkerAppModule);

　
/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
