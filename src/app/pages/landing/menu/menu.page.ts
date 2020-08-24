import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelpPage } from '../../modals/help/help.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user:any
  url:any

  constructor(public modalController: ModalController, private router: Router) { 
   
  }

  ionViewDidEnter(){
    this.user = JSON.parse(localStorage.getItem("user")).user
  }

  async showHelp() {
    const modal = await this.modalController.create({
      component: HelpPage,
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  logout(){

    localStorage.removeItem("user")
    localStorage.removeItem("token")
    this.router.navigateByUrl("/")

  }


}
