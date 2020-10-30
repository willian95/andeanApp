import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-bank-transfer-loading',
  templateUrl: './send-bank-transfer-loading.page.html',
  styleUrls: ['./send-bank-transfer-loading.page.scss'],
})
export class SendBankTransferLoadingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  paymentSupport() {

    this.router.navigateByUrl('/payment-support');

  }


}
