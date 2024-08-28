import { Component } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared/shared.module';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
