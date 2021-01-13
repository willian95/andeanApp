import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-funds-bank-transfer-loading',
  templateUrl: './add-funds-bank-transfer-loading.page.html',
  styleUrls: ['./add-funds-bank-transfer-loading.page.scss'],
})
export class AddFundsBankTransferLoadingPage implements OnInit {

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
