import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared/shared.module';
import { Project, Projects } from '../../models/projects.entity';
import { TruncatePipe } from '../../common/truncate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule,TruncatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  normalProjects: Project[] = [];
  gameProjects: Project[] = [];
  selectedCategory: string = 'Normal';
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
  ngOnInit(): void {    
    const projects = new Projects().data;
    this.normalProjects = projects
  .filter(project => project.category === 'Normal')
  .sort((a, b) => parseInt(a.id) - parseInt(b.id));
  this.gameProjects = projects
  .filter(project => project.category === 'Game')
  .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  }

  
}
