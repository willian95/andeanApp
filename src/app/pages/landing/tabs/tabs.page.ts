import { Component, OnInit } from '@angular/core';
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
  constructor(private urlService: UrlService, private http: HttpClient, private errorExtractService: ErrorExtractorService) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.verifyMe()
  }

  verifyMe(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/auth/me", {}, {headers})
    .subscribe((response: any) => {

      console.log(response)

    }, 
    (errorResponse: HttpErrorResponse) => {
 
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);

      errors.forEach((data) => {
        string += data+"\n"
      })

    }) 

  }

}
