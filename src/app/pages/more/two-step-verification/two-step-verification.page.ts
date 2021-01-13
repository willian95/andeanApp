import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.page.html',
  styleUrls: ['./two-step-verification.page.scss'],
})
export class TwoStepVerificationPage implements OnInit {

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

}
