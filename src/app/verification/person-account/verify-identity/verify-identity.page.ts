import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-identity',
  templateUrl: './verify-identity.page.html',
  styleUrls: ['./verify-identity.page.scss'],
})
export class VerifyIdentityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  identificationDocument() {

    this.router.navigateByUrl('/identification-document');

  }

  passport() {

    this.router.navigateByUrl('/passport');

  }

  drivingPermit() {

    this.router.navigateByUrl('/driving-permit');

  }

}
