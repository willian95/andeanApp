import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.page.html',
  styleUrls: ['./verify-account.page.scss'],
})
export class VerifyAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verifyIdentity() {

    this.router.navigateByUrl('/verify-identity');

  }

  verifyResidence() {

    this.router.navigateByUrl('/verify-residence');

  }

  checkPhonePerson() {

    this.router.navigateByUrl('/check-phone-person');

  }

  


  

}
