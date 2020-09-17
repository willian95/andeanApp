import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { AccountsPage } from '../../modals/accounts/accounts.page';

@Component({
  selector: 'app-update-recipients',
  templateUrl: './update-recipients.page.html',
  styleUrls: ['./update-recipients.page.scss'],
})
export class UpdateRecipientsPage implements OnInit {

  countries:any = []
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
  @Input() recipient: any;
  @Input() from: any;
  compareWith : any ;

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
    
    this.country = this.recipient.country.id
    this.name = this.recipient.name
    this.lastname = this.recipient.lastname
    this.dni = this.recipient.dni
    this.phone = this.recipient.phone
    this.email = this.recipient.email
    this.bankName = this.recipient.bank_name
    this.bankAccount = this.recipient.bank_account
    this.code = this.recipient.bank_code
    this.address = this.recipient.address

    this.compareWith = this.compareWithFn;
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

  update(){

    this.presentLoading()

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.put(this.url+"/api/v1/recipients/"+this.recipient.id, 
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

      //this.presentAlert("Excelente", "Haz actualizado un destinatario");
      this.dimissLoading()
      localStorage.setItem("andean_recipient_id", this.recipient.id)
      if(this.from == "Order"){
        this.dismiss()
        this.accounts()
        //mostrar cuentas
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

  compareWithFn(o1, o2) {
    return o1 === o2;
  };

}
