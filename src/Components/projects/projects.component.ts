import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared/shared.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
