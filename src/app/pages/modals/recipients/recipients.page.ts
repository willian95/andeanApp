import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';
import { UrlService } from '../../../services/url.service';
import { CreateRecipientsPage } from '../../modals/create-recipients/create-recipients.page';
import { UpdateRecipientsPage } from '../../modals/update-recipients/update-recipients.page';
import { AccountsPage } from '../../modals/accounts/accounts.page';

@Component({
  selector: 'app-recipients',
  templateUrl: './recipients.page.html',
  styleUrls: ['./recipients.page.scss'],
})
export class RecipientsPage implements OnInit {

  loading:any
  recipients:any = []
  url:any = ""
  load:any = true

  nextLink:any = null
  prevLink:any = null

  constructor(public modalController: ModalController, private http: HttpClient, private urlService: UrlService, public loadingController: LoadingController) { 
    this.url = this.urlService.getUrl()
    console.log("order_id", localStorage.getItem("andean_order_id"))
  }

  ngOnInit() {
    this.fetchRecipients()
    
  }

  async presentLoading() {
    this.load = true
    this.loading = await this.loadingController.create({
    
    });
    await this.loading.present();
  }

  async dismissLoading(){
    this.load = false
    await this.loading.dismiss();
    
  }

  async createRecipients() {

    const modal = await this.modalController.create({
      component: CreateRecipientsPage,
      id:"CreateRecipientsModal",
      componentProps: {
        "from": "Order"
      }
    });
    return await modal.present();

  }

  async updateRecipients(recipient) {
    //console.log("recipient", recipient.name)
    const modal = await this.modalController.create({
      component: UpdateRecipientsPage,
      id:"UpdateRecipientsModal",
      componentProps: {
        "recipient": recipient,
        "from": "Order"
      }
    });
    return await modal.present();

  }

  async accounts() {
    //console.log("recipient", recipient.name)
    const modal = await this.modalController.create({
      component: AccountsPage,
      id:"AccountsModal"
    });
    return await modal.present();

  }

  fetchRecipients(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });
    this.presentLoading()
    this.http.get(this.url+"/api/v1/recipients", {headers}).subscribe((res:any) => {
      this.dismissLoading()
      this.recipients = res.data
      this.nextLink =  res.links.next
      this.prevLink =  res.links.prev
      console.log("test-recipients", this.recipients)

    })
    
  }

  select(id){
    console.log("test-recipeint-id", id)
    localStorage.setItem("andean_recipient_id", id)
    this.accounts()

  }

  dismiss() {
    this.modalController.dismiss();
  }

  paginate(link){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(link, {headers})
    .subscribe((response: any) => {
      this.nextLink =  response.links.next
      this.prevLink =  response.links.prev
      this.recipients = response.data
    })
  }


}
