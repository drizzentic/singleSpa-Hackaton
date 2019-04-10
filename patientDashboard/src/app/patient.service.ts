import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PatientService {

    baseUrl = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient/';
    constructor(private http: HttpClient) {

    }

    getPatientByUuid(uuid: string) {
        const url = this.baseUrl + uuid;
        return this.http.get(url);
    }
}
