import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  accountServices() {

    this.router.navigateByUrl('/account-services');

  }

  selectCard() {

    this.router.navigateByUrl('/select-card');

  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }


}
