import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UrlService } from '../services/url.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorExtractorService } from '../services/error-extractor.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  url:any
  constructor(private router: Router, private urlService: UrlService, private http: HttpClient, private errorExtractService: ErrorExtractorService, private navCtrl: NavController) {
    this.url = this.urlService.getUrl()
    this.verifyMe()
  }

  login(){

    this.router.navigateByUrl('/login');

  }

  register(){

    this.router.navigateByUrl('/register');

  }

  verifyMe(){
    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
    .subscribe((response: any) => {
      
      window.localStorage.setItem("user", JSON.stringify(response))
      this.navCtrl.navigateRoot("/tabs");         

    }, 
    (errorResponse: HttpErrorResponse) => {
 
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

    }) 
  }

}
