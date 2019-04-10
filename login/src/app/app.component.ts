import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from '../../../services/session-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (
    private router: Router,
    private session: SessionStorageService
  ){}

  ngOnInit(): void {
    
  }
  
  title = 'login';
   public username = '';
   public password = '';

  public login() {
     let username=this.username;
     let password=this.password

     const body = JSON.stringify({ username, password });
     const auth = this.authenticate(username, password)

     if(auth){
      document.location.href = '/patientSearch';
     }else{
       console.log("Could not redirect")
     }
  }
  public authenticate(username: string, password: string) {
    
    const credentials = {
      username: username,
      password: password
    };
    let status=false;
    //Implement service to call the API
        if (username==="rono" && password ==="rono123") {
         this.setCredentials(username, password);
         status=true;
        }

    return status;
  }

  public logOut() {

        this.clearSessionCache();
  }

  public clearSessionCache() {
    this.clearCredentials();
  }


  private setCredentials(username: string, password: string) {

    const base64 = btoa(username + ':' + password);
    this.session.setItem('credentials', base64);

    return base64
  }

  private clearCredentials() {

    this.session.remove('credentials');
  }
  
}
