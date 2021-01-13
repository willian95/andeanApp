import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-residence',
  templateUrl: './verify-residence.page.html',
  styleUrls: ['./verify-residence.page.scss'],
})
export class VerifyResidencePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  bankStatement() {

    this.router.navigateByUrl('/bank-statement');

  }

  invoice() {

    this.router.navigateByUrl('/invoice');

  }

  taxDocument() {

    this.router.navigateByUrl('/tax-document');

  }

}
