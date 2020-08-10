import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  user:any
  constructor(private router: Router) { 
    this.getUser()
  }

  ionViewDidEnter(){

    this.getUser()

  }

  getUser(){
    this.user = JSON.parse(window.localStorage.getItem("user")).user
  }

  goToAccount(){
    this.router.navigateByUrl("/tabs/account"); 
  }

  ngOnInit() {
  }

}
