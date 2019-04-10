import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientVitalsService {

  public v = 'full';
  private patientsUrl = 'https://ngx.ampath.or.ke/etl-latest/etl/patient/';

  constructor(private http: HttpClient) { }

  getVitals(patientUuid, startIndex, limit) {
    const url = this.patientsUrl + '/' + patientUuid + '/vitals';
    const params: HttpParams = new HttpParams()
    .set('startIndex', startIndex.toString())
    .set('limit', limit.toString());

    return this.http.get<any>(url, {
      params: params
    }).pipe(map((response) => {
      return response.result;
    }));
  }
}
