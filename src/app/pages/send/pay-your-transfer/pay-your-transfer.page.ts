import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pay-your-transfer',
  templateUrl: './pay-your-transfer.page.html',
  styleUrls: ['./pay-your-transfer.page.scss'],
})
export class PayYourTransferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  sendBankTransfer() {

    this.router.navigateByUrl('/send-bank-transfer');

  }
  


}
