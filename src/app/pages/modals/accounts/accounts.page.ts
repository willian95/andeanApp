import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';
import { UrlService } from '../../../services/url.service';
import { CreatePaymentsPage } from '../../modals/create-payments/create-payments.page';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  accounts:any = []
  currency_id:any = 0
  url:any = ""
  loading:any

  constructor(public modalController: ModalController, private http: HttpClient, private urlService: UrlService, public loadingController: LoadingController) { 
    this.url = this.urlService.getUrl()
    this.currency_id = localStorage.getItem("andean_currency_id")
    console.log("test-recipient_id", localStorage.getItem("andean_recipient_id"))

  }

  ngOnInit() {
    this.fetchAccounts()
  }

  fetchAccounts(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.presentLoading()
    this.http.get(this.url+"/api/v1/accounts", {headers}).subscribe((res:any) => {
      this.dismissLoading()
      this.accounts = res.data
      console.log("test-accounts", this.accounts)
    })

  }

  async createPayment() {

    const modal = await this.modalController.create({
      component: CreatePaymentsPage,
      id:"CreatePaymentsModal"
    });
    return await modal.present();

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
    
    });
    await this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
    
  }

  select(id){

    localStorage.setItem("andean_account_id", id)
    this.createPayment()

  }

  dismiss(){

    this.modalController.dismiss();

  }



}
