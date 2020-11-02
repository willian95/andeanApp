import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-balance',
  templateUrl: './your-balance.page.html',
  styleUrls: ['./your-balance.page.scss'],
})
export class YourBalancePage implements OnInit {

  balance: any = 1

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
