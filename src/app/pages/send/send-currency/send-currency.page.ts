import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-send-currency',
  templateUrl: './send-currency.page.html',
  styleUrls: ['./send-currency.page.scss'],
})
export class SendCurrencyPage implements OnInit {
  typeCurrency: any = 1
  constructor(private router: Router) { }

  ngOnInit() {
  }
  typeSelect(opt) {
    
    this.typeCurrency = opt;

  }

   wallet() {

    this.router.navigateByUrl('/wallet');

  }

  card() {

    this.router.navigateByUrl('/card');

  }

}
