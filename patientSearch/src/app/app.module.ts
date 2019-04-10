import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientSearchService } from './services/patient-search.service';
import { PocHttpInteceptor } from './services/http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/patientSearch'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PocHttpInteceptor,
      multi: true
    },
    PatientSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
