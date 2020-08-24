import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';


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

  constructor(private urlService: UrlService, private http: HttpClient, private router: Router) { 
    this.url = this.urlService.getUrl()
    this.verifyMe()
  }

  ionViewDidEnter(){

    this.verifyMe()
    this.identity()
    this.address()

  }

  goToAccount(){
    this.router.navigateByUrl("/tabs/account"); 
  }

  goToAddress(){
    this.router.navigateByUrl("/tabs/address"); 
  }

  identity(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/identity", {headers})
    .subscribe((response: any) => {

      this.identityData = response.data
      console.log("test-identity",this.identityData)
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
      console.log("test-address",this.addressData)
    })

  }

  ngOnInit() {
  }

}
