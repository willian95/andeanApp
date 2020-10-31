import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-funds-detail',
  templateUrl: './add-funds-detail.page.html',
  styleUrls: ['./add-funds-detail.page.scss'],
})
export class AddFundsDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  addFundsBankTransfer() {

    this.router.navigateByUrl('/add-funds-bank-transfer');

  }

  

}
