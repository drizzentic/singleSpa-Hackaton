import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public patientUuid: string;
  public patient;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute
    ) {

  }
  public ngOnInit() {
    this.getPatientUuid().subscribe((params) => {
      if (params.patient) {
        this.patientUuid = params.patient;
        this.getPatient(this.patientUuid).subscribe(patient => {
          this.patient = patient;
        });
      }
    });

  }

  public getPatientUuid() {
    return this.route.queryParams;
  }

  public getPatient(uuid) {
    return this.patientService.getPatientByUuid(uuid);
  }
}
