import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { AccountsPage } from '../../modals/accounts/accounts.page';

@Component({
  selector: 'app-create-recipients',
  templateUrl: './create-recipients.page.html',
  styleUrls: ['./create-recipients.page.scss'],
})
export class CreateRecipientsPage implements OnInit {

  countries:any
  country:any
  url:any
  name:any
  lastname:any
  dni:any
  phone:any
  email:any
  bankName:any
  bankAccount:any
  code:any
  address:any
  loading:any
  @Input() from: any;

  constructor(public modalController: ModalController,private http: HttpClient, private urlService: UrlService, private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController) {
    this.url = this.urlService.getUrl()
  }

  async presentAlert(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'alert-custom',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
    
    });
    await this.loading.present();
  }

  async dimissLoading(){
    await this.loading.dismiss();
  }

  ngOnInit() {
    this.fetchCountries()
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async accounts() {
    //console.log("recipient", recipient.name)
    const modal = await this.modalController.create({
      component: AccountsPage,
      id:"AccountsModal"
    });
    return await modal.present();

  }

  store(){

    this.presentLoading()

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/recipients", 
      {
        country_id: this.country,
        name: this.name,
        lastname:this.lastname,
        dni:this.dni,
        phone:this.phone,
        email:this.email,
        bank_name:this.bankName,
        bank_account:this.bankAccount,
        code:this.code,
        address:this.address,
      },
      {headers}
    )
    .subscribe((response: any) => {

      this.dimissLoading()
      console.log("test-response", response)
      localStorage.setItem("andean_recipient_id", response.data.id)
      if(this.from == "Order"){

        this.dismiss()
        this.accounts()

      }else{
        this.presentAlert("", "<h3>Destinatario actualizado</h3>")
        this.dismiss()
      }
      

    }, 
    (errorResponse: HttpErrorResponse) => {
      this.dimissLoading()
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

      this.presentAlert("¡Ha ocurrido un problema!", string)

    })  

  }


  fetchCountries(){
    
    //api/v1/countries
    this.http.get(this.url+"/api/v1/countries")
    .subscribe((response: any) => {

      this.countries = response.data

    })
  }

}
