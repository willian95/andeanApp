import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-phone-person',
  templateUrl: './check-phone-person.page.html',
  styleUrls: ['./check-phone-person.page.scss'],
})
export class CheckPhonePersonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public contrys = this.getCountrys;


  
  getCountrys() {
    
    fetch('../../../../assets/json/countrys.json')
      .then(function (response) {
        console.log(response.json());
        return response.json();
      })
      .then(function (myJson) {
        
        console.log(myJson);
        return myJson;

      });
  }

  
}
