import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root-patient-vitals',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app2';
  ngOnDestroy() {
    console.log('destroying app2');
  }
}
