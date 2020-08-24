import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  senderCurrency:any = "CLP"
  receiverCurrency:any = "USD"

  constructor() { }

  ngOnInit() {
  }

}
