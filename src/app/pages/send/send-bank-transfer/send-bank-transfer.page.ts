import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-bank-transfer',
  templateUrl: './send-bank-transfer.page.html',
  styleUrls: ['./send-bank-transfer.page.scss'],
})
export class SendBankTransferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  sendBankTtransferLoading() {

  this.router.navigateByUrl('/send-bank-transfer-loading');

  }

}
