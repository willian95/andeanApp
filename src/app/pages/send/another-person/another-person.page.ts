import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController} from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';

@Component({
  selector: 'app-another-person',
  templateUrl: './another-person.page.html',
  styleUrls: ['./another-person.page.scss'],
})
export class AnotherPersonPage implements OnInit {

  countries:any = []
  loading:any
  url:any = ""
  country:any = ""

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
  

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

}
