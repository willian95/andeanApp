import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';

var checkLoad

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  url:any
  identityData:any = null
  user:any = null
  addressData:any = null
  load:any = false

  addressCheckDone:any = false;
  identityCheckDone:any = false;
  verifyCheckDone:any = false


  constructor(private urlService: UrlService, private http: HttpClient, private errorExtractService: ErrorExtractorService, private router: Router) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {

    this.check()

    checkLoad = window.setInterval(() => {

      if(this.addressCheckDone == true && this.identityCheckDone == true && this.verifyCheckDone == true){
        this.load = true
        console.log("interval", this.addressData, this.identityData)
        clearInterval(checkLoad);
      }

    }, 1000)

  }

  check(){
    this.verifyMe()
    this.identity()
    this.address()
  }

  address(){
 
    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/address", {headers})
    .subscribe((response: any) => {
      console.log("addres", response)
      
      if(response.data != null){
        this.addressData = response.data
        console.log("addressData", this.addressData)
      }
      this.addressCheckDone = true
      
    })

  }

  identity(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/identity", {headers})
    .subscribe((response: any) => {
      
      console.log("identit", response)
      if(response != null){
        this.identityData = response.data
      }
      this.identityCheckDone = true
      
    })

  }

  

  verifyMe(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
    .subscribe((response: any) => {
        this.verifyCheckDone = true
        this.user = response.user

    }, 
    (errorResponse: HttpErrorResponse) => {
      clearInterval(checkLoad);
      this.router.navigateByUrl("/")

      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

    }) 

  }

}
