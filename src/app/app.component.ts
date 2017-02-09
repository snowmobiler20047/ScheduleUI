import { Component } from '@angular/core';
import {Routes} from '@angular/router'
import {InstructorComponent} from './instructor.component'
import { StudentComponent } from './student.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scheduler';
}

