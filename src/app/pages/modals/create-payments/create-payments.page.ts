import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController  } from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { CheckoutPage } from '../../modals/checkout/checkout.page';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-create-payments',
  templateUrl: './create-payments.page.html',
  styleUrls: ['./create-payments.page.scss'],
})
export class CreatePaymentsPage implements OnInit {

  loading:any
  order:any = null
  account:any = null
  url:any

  constructor(public modalController: ModalController,private http: HttpClient, private urlService: UrlService, private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController, public clipboard:Clipboard, public toastController: ToastController) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {
    this.getAccount()
    this.getOrder()
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

  dismiss(){

    this.modalController.dismiss();

  }

  getOrder(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/orders/"+localStorage.getItem("andean_order_id"), {headers}).subscribe((res:any) => {

      console.log("test-order", res)
      this.order = res.data

    })

  }

  getAccount(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/accounts/"+localStorage.getItem("andean_account_id"), {headers}).subscribe((res:any) => {

      console.log("test-account", res)
      this.account = res.data
    })

  }

  cp(code = "descripcion"){

    this.clipboard.copy(code);
    this.presentToast()

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Código copiado',
      duration: 2000
    });
    toast.present();
  }

  async checkout(){

    const modal = await this.modalController.create({
      component: CheckoutPage,
      id:"CheckoutModal"
    });
    return await modal.present();

  }

}
