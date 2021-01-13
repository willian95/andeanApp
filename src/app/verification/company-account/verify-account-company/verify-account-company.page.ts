import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-account-company',
  templateUrl: './verify-account-company.page.html',
  styleUrls: ['./verify-account-company.page.scss'],
})
export class VerifyAccountCompanyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verifyCompany() {

    this.router.navigateByUrl('/verify-company');

  }

  verifyResidence() {

    this.router.navigateByUrl('/verify-residence');

  }

  checkPhonePerson() {

    this.router.navigateByUrl('/check-phone-person');

  }


}
