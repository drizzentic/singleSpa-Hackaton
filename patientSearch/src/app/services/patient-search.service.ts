import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PatientSearchService {

  private patientsUrl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient';
  public v: string = 'custom:(uuid,display,' +
    'identifiers:(identifier,uuid,preferred,location:(uuid,name),' +
    'identifierType:(uuid,name,format,formatDescription,validator)),' +
    'person:(uuid,display,gender,birthdate,dead,age,deathDate,birthdateEstimated,' +
    'causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),'
    + 'attributes,preferredAddress:(uuid,preferred,address1,address2,cityVillage,longitude,' +
    'stateProvince,latitude,country,postalCode,countyDistrict,address3,address4,address5' +
    ',address6)))';

  constructor(private http: HttpClient) { }

  findPatient(searchText) {
    const url = this.patientsUrl;
    const params: HttpParams = new HttpParams()
      .set('q', searchText)
      .set('v', (this.v && this.v.length > 0) ? this.v : this.v);
    return this.http.get(url, {
// tslint:disable-next-line: object-literal-shorthand
      params: params
    }).pipe(
      map((response: any) => {
        return response.results;
      }));
  }
}
