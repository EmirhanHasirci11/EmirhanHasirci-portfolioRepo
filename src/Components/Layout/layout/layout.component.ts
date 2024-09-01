import { Component } from '@angular/core';
import { SharedModule } from '../../../common/shared/shared/shared.module';

import { FooterComponent as FooterComponent } from "../../landing/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
