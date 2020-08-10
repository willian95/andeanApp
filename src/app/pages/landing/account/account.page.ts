import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController} from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  url:any
  country:any = ""
  countries:any = []
  nationality:any
  documentType:any
  gender:any
  documentNumber:any
  validationNumber:any
  createdDate:any
  dueDate:any
  birthDate:any
  firstName:any
  middleName:any
  firstLastname:any
  secondLastname:any

  constructor(private http: HttpClient, private urlService: UrlService,private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController) { 
    this.url = this.urlService.getUrl()
    this.fetchCountries()
  }

  fetchCountries(){
    
    //api/v1/countries
    this.http.get(this.url+"/api/v1/countries")
    .subscribe((response: any) => {

      this.countries = response.data

    })
  }

  uploadFront(){

    document.getElementById('front-identity').click();

  }

  store(){

    let formData = new FormData();
    let dataJson = {
      'country_id': this.country,
      'nationality': this.nationality,
      'first_name': this.firstName,
      'middle_name': this.middleName,
      'last_name': this.firstLastname,
      'second_surname': this.secondLastname,
      'dni_number': this.documentNumber,
      'validation_number': this.validationNumber,
      'expiration_date': this.dueDate,
      'issue_date': this.createdDate,
      'dob': this.birthDate,
      'document_type': this.documentType,
      'gender': this.gender
    };

    this.http.post(this.url+"/api/v1/countries", {
      
      
    })
    .subscribe((response: any) => {

      this.countries = response.data

    })

  }

  ngOnInit() {
  }

}
