import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../../../assets/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = projects;
  i = 0;

  addCount() {
    this.i = this.i + 1;
    if (this.i > this.projects.length - 1) {
      this.i = this.projects.length - 1;
    }
  }

  substractCount() {
    this.i = this.i - 1;
    if (this.i < 0) {
      this.i = 0;
    }
  }
}
