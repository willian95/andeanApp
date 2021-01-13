import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ModalController  } from '@ionic/angular';
import { RecipientsPage } from '../../modals/recipients/recipients.page';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  user:any
  identityData:any
  addressData:any
  url:string
  orders:any = []
  load:any = true
  filter:any

  nextLink:any = null
  prevLink:any = null

  constructor(private urlService: UrlService, private http: HttpClient, private router: Router, public modalController: ModalController) { 
    this.url = this.urlService.getUrl()
    this.verifyMe()
  }

  ionViewDidEnter(){

    this.verifyMe()
    this.identity()
    this.address()
    this.fetchOrders()

  }

  goToAccount(){
    this.router.navigateByUrl("/tabs/account"); 
  }

  goToAddress(){
    this.router.navigateByUrl("/tabs/address"); 
  }

  goToSend(){
    this.router.navigateByUrl("/tabs/send"); 
  }

  identity(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/identity", {headers})
    .subscribe((response: any) => {

      this.identityData = response.data
      //console.log("test-identity",this.identityData)
    })

  }

  verifyMe(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
    .subscribe((response: any) => {

      this.user = response.user

    }) 

  }

  address(){
  
    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/address", {headers})
    .subscribe((response: any) => {

      this.addressData = response.data
      //console.log("test-address",this.addressData)
    })

  }

  fetchOrders(){

    
    let query = ""
    if(this.filter == "completed"){
      query = "?completed=true"
    }
    else if(this.filter == "rejected"){
      query = "?rejected=true"
    }
    else if(this.filter == "filled"){
      query = "?filled=true"
    }
    else if(this.filter == "expired"){
      query = "?expired=true"
    }

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/orders"+query, {headers})
    .subscribe((response: any) => {
      this.nextLink =  response.links.next
      this.prevLink =  response.links.prev
      this.orders = response.data
    })

  }

  async showRecipients() {

    const modal = await this.modalController.create({
      component: RecipientsPage,
      id:"RecipientsModal"
    });
    return await modal.present();
  }

  paginate(link){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(link, {headers})
    .subscribe((response: any) => {
      this.nextLink =  response.links.next
      this.prevLink =  response.links.prev
      this.orders = response.data
    })
  }

  ngOnInit() {
  }

}
