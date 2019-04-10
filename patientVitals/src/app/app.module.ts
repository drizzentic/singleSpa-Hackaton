import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { PatientVitalsComponent } from './patient-vitals/patient-vitals.component';
import { PatientVitalsService } from './services/patient-vitals.service';
import { PocHttpInteceptor } from './services/http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    PatientVitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/patientVitals'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PocHttpInteceptor,
      multi: true
    },
    PatientVitalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
