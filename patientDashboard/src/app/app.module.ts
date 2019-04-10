import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { PatientService } from './patient.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PocHttpInteceptor } from './http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/patientDashboard'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PocHttpInteceptor,
      multi: true
    },
    PatientService
  ],
<<<<<<< HEAD
=======
  providers: [{provide: APP_BASE_HREF, useValue: '/home'}],
>>>>>>> add static login
  bootstrap: [AppComponent]
})
export class AppModule { }
