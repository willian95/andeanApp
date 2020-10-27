import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.page.html',
  styleUrls: ['./select-card.page.scss'],
})
export class SelectCardPage implements OnInit {

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
