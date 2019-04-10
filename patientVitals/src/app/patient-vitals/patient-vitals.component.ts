import { Component, OnInit } from '@angular/core';
import { PatientVitalsService } from '../services/patient-vitals.service';
import e from '../../../../event-bus';
@Component({
  selector: 'app-patient-vitals',
  templateUrl: './patient-vitals.component.html',
  styleUrls: ['./patient-vitals.component.css']
})
export class PatientVitalsComponent implements OnInit {
  public patientUuid;
  public startIndex = 0;
  public limit = 10;
  public vitals: any;

  constructor(
    private patientVitalsService: PatientVitalsService
  ) { }

  ngOnInit() {
    this.loadVitals();
    e.on('patient', patient => {
      this.patientUuid = patient;
    });
  }

  public loadVitals() {
    if (this.patientUuid) {
      this.patientVitalsService.getVitals(this.patientUuid, this.startIndex, this.limit).subscribe((data) => {
        this.vitals = data;
      });

    }
  }
}
