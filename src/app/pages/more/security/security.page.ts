import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  selectCard() {

    this.router.navigateByUrl('/select-card');

  }

  sendCurrency() {

    this.router.navigateByUrl('/send-currency');

  }

  addFunds() {

    this.router.navigateByUrl('/add-funds');

  }

  more() {

    this.router.navigateByUrl('/more');

  }  

  changeMail() {

    this.router.navigateByUrl('/change-mail');

  } 
  
  twoStepVerification() {

    this.router.navigateByUrl('/two-step-verification');

  }  


}
