import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared/shared.module';
import { Experience, Experiences } from '../../../models/experiences.entity';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit{
  data:Experience[]=[]
  ngOnInit(): void {
    this.data = new Experiences().data.sort((a, b) => a.id.localeCompare(b.id));
  }

}
