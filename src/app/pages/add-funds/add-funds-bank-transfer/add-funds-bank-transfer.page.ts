import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-funds-bank-transfer',
  templateUrl: './add-funds-bank-transfer.page.html',
  styleUrls: ['./add-funds-bank-transfer.page.scss'],
})
export class AddFundsBankTransferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  addFundsBankTransferLoading() {

    this.router.navigateByUrl('/add-funds-bank-transfer-loading');

  }

}
