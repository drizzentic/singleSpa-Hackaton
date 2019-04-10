import { Component, OnInit } from '@angular/core';
import { PatientSearchService } from '../services/patient-search.service';
import e from '../../../../event-bus';
@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  public searchString = '';
  public foundPatients;
  public selectedPatient: any;
  public loadedPatients = false;
  constructor(
    private patientSearchService: PatientSearchService
  ) { }

  ngOnInit() {
  }

  public findPatient() {
    this.patientSearchService.findPatient(this.searchString).subscribe((d) => {
      this.loadedPatients = true;
      this.foundPatients = d;
    });
  }

  public selectPatient(patient: any) {
    if (patient) {
      e.emit('patient', patient);
      this.selectedPatient = patient;
      window.location.href = 'http://localhost:4200/patientDashboard';
    }
  }

}
