import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-funds-term',
  templateUrl: './add-funds-term.page.html',
  styleUrls: ['./add-funds-term.page.scss'],
})
export class AddFundsTermPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

  addFundsDetail() {

    this.router.navigateByUrl('/add-funds-detail');

  }

  

}
