import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.page.html',
  styleUrls: ['./add-funds.page.scss'],
})
export class AddFundsPage implements OnInit {

  @ViewChild('inputId', { static: false }) inputElement: IonInput;

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputElement.setFocus();
    }, 400);
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  addFundsTerm() {

    this.router.navigateByUrl('/add-funds-term');

  }

}
