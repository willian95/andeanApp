import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  url:any
  identityData:any
  user:any
  addressData:any

  constructor(private urlService: UrlService, private http: HttpClient, private errorExtractService: ErrorExtractorService, private router: Router) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {


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

      this.addressData = response.data
      
    })

  }

  identity(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/user/identity", {headers})
    .subscribe((response: any) => {

      this.identityData = response.data
      
    })

  }

  

  verifyMe(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
    .subscribe((response: any) => {

        this.user = response.user

    }, 
    (errorResponse: HttpErrorResponse) => {
      
      this.router.navigateByUrl("/")

      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

    }) 

  }

}
