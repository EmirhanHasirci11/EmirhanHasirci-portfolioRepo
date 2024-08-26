import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared/shared.module';
import { Project, Projects } from '../../../models/projects.entity';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[]=[]
  ngOnInit(): void {
    this.projects = new Projects().data;
  }

}
