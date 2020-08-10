import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../../services/url.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';
import { ErrorExtractorService } from '../../services/error-extractor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  url:any
  clientId:any
  clientSecret:any
  email:any
  password:any
  loading:any

  constructor(private router: Router, private urlService: UrlService, private http: HttpClient, private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController) { 
    this.url = this.urlService.getUrl()
    this.clientId = this.urlService.getClientId()
    this.clientSecret = this.urlService.getClientSecret()
  }

  async presentAlert(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class'
    });
    await this.loading.present();
  }

  async dimissLoading(){
    await this.loading.dismiss();
    
  }

  ngOnInit() {
  }

  login(){

    this.presentLoading()

    this.http.post(this.url+"/oauth/token", {username: this.email, password: this.password, client_id: this.clientId, client_secret: this.clientSecret, grant_type :"password"})
    .subscribe((response: any) => {

      this.dimissLoading()
      if(response.access_token){
        window.localStorage.setItem("token", response.access_token)

        let headers = new HttpHeaders({
          Authorization: "Bearer "+window.localStorage.getItem('token'),
        });
    
        this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
        .subscribe((response: any) => {
          
          window.localStorage.setItem("user", JSON.stringify(response))
          this.router.navigateByUrl("/tabs/activity");          
    
        }, 
        (errorResponse: HttpErrorResponse) => {
     
          let string = ""
          let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);
    
          errors.forEach((data) => {
            string += data+"\n"
          })
    
        }) 

      }else{
        this.presentAlert("Ha ocurrido un problema", "Estamos teniendo inconvenientes, intente de nuevo más tarde")
        this.password = ""
      }
      
    }, 
    (errorResponse: HttpErrorResponse) => {
      this.dimissLoading()
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

      this.presentAlert("Ha ocurrido un problema", string)

    })  

  }

}
