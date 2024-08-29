import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../common/shared/shared/shared.module';
import { ProjectsComponent } from "./projects/projects.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SharedModule, ProjectsComponent, ExperiencesComponent, AboutComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  nameText = ""
  txt="Emirhan Hasırcı"

  i = 0;
  interval: any;

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect() {
    this.interval = setInterval(() => {
      this.nameText += this.txt[this.i];
      this.i++;
      if (this.i === this.txt.length) {
        clearInterval(this.interval);
      }
    }, 60);
  }
}
