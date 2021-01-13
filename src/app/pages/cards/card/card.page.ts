import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
