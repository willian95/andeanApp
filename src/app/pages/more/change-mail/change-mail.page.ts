import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-mail',
  templateUrl: './change-mail.page.html',
  styleUrls: ['./change-mail.page.scss'],
})
export class ChangeMailPage implements OnInit {

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
