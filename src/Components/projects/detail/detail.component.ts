import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { Project, Projects } from '../../../models/projects.entity';
import { Subscription } from 'rxjs';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SharedModule,ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent,CarouselItemComponent, CarouselControlComponent,],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  data: Project;
  pId: string;
  routeSub?: Subscription
  constructor(private router: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.routeSub = this.router.paramMap.subscribe({
      next: (res) => {
        this.pId = res.get('id');
        if (this.pId) {
          this.data = new Projects().data.find(flt => flt.id == this.pId)
        }
      }
    })
  }
}

