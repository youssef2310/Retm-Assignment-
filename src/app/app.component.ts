import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'retmTask';
  preLoading: boolean = true;
  constructor(private ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.preLoading = false;
      this.ref.markForCheck();
    }, 3000);
  }
}
