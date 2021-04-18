
import { Component } from '@angular/core';
import { CoursesService } from './courses.services';

@Component({
    selector: 'courses',
    template: `
        <h2> {{ Title }} </h2>
        <ul>
            <li *ngFor="let course of courses"> {{ course }} </li>
        </ul>
    `
})

export class CoursesComponent {
    title = "List of Courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    get Title() {
        return this.title
    }

    set Title(value) {
        this.title = value;
    }
}