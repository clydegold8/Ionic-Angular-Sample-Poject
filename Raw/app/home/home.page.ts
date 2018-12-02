import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController, public navCtrl: NavController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sign Up Page under construction',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

 async goToMyPage() {
    // go to the MyPage component
    this.navCtrl.navigateForward('reddit-page');
    console.log('aa');
  }
}
