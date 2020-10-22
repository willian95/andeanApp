import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController} from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
import { ErrorExtractorService } from '../../services/error-extractor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  typeUser: any = 1
  country:any = ""
  email:any = ""
  password:any = ""
  passwordConfirmation = ""
  countries:any = []
  loading:any
  url:any = ""

  constructor(private router: Router, private http: HttpClient, private urlService: UrlService,private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController) {
    this.url = this.urlService.getUrl()
  }

  async presentAlert(header, text) {
    const alert = await this.alertController.create({
      header: header,
      cssClass: 'alert-custom',
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertOk(header, text) {
    const alert = await this.alertController.create({
      header: header,
      cssClass: 'alert-custom',
      message: text,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl("/");  
        }
      }]
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
    this.fetchCountries()
  }

  fetchCountries(){
    
    //api/v1/countries
    this.http.get(this.url+"/api/v1/countries")
    .subscribe((response: any) => {

      this.countries = response.data

    })
  }
  
  cancel() {

    this.router.navigateByUrl('/home');

  }

  typeUserSelect(opt) {
    
    this.typeUser = opt;

  }

  register(){

    this.presentLoading()
    this.http.post(this.url+"/api/v1/auth/register",  {
      country_id: this.country,
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordConfirmation,
    })
    .subscribe((response: any) => {
      this.dimissLoading()
      
      if(response.user){

        this.presentAlertOk("Excelente", "Te has registrado con éxito, verifica tu bandeja de entrada para validar tu cuenta")
        this.country = ""
        this.email  =""
        this.password = ""
        this.passwordConfirmation = ""

      }else{

        this.presentAlert("Ha ocurrido un problema", "Estamos teniendo inconvenientes, intente de nuevo más tarde")

      }

    },
    (errorResponse: HttpErrorResponse) => {
      this.dimissLoading()
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);
      var i = 0;

      errors.forEach((data) => {
        if(i < 5)
          string += "<p>"+data+"</p>"

        i++
      })

      this.presentAlert("Ha ocurrido un problema", string)

    })
    
    

    //this.router.navigateByUrl("/tabs/activity")
  }

}
