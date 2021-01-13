import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-support',
  templateUrl: './payment-support.page.html',
  styleUrls: ['./payment-support.page.scss'],
})
export class PaymentSupportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

}
