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
    this.normalProjects = projects.sort((a, b) => a.id.localeCompare(b.id)).filter(project => project.category === 'Normal');
    this.gameProjects = projects.sort((a, b) => a.id.localeCompare(b.id)).filter(project => project.category === 'Game');
  }

  
}
