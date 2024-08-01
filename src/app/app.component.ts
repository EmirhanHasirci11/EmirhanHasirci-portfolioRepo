import { Component } from '@angular/core';
import { SharedModule } from '../common/shared/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  template:`<router-outlet>`,
})
export class AppComponent {
  title = 'Portfolio';
}
