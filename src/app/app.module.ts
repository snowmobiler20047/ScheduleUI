import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component'
import { InstructorComponent } from './instructor.component'
import {InstructorService} from './instructor.service';
import { InstructorSelectorComponent } from './instructor-selector.component';
import { Instructor } from './instructor';
import { StudentComponent } from './student.component'
import { AutoGrowDirective } from './auto-grow.directive'
import { WeeklyScheduleComponent } from './weekly-schedule.component'
import { WeeklyScheduleTableComponent } from './weeklySchedule/weekly-schedule-table.component'
import {WeeklyScheduleService} from './weeklySchedule/weekly-schedule.service';

import { requestOptionsProvider } from './default-request-options.service'

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'billing',
        component: StudentComponent
    },
    {
        path: 'courses',
        component: InstructorComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '*',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructorComponent,
    InstructorSelectorComponent,
    StudentComponent,
    WeeklyScheduleComponent,
    WeeklyScheduleTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InstructorService, WeeklyScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
