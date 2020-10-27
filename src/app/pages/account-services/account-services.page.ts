import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-services',
  templateUrl: './account-services.page.html',
  styleUrls: ['./account-services.page.scss'],
})
export class AccountServicesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectCard() {

    this.router.navigateByUrl('/select-card');

  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

}
