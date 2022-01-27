import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data: any;

  constructor(
      public activatedRoute: ActivatedRoute,
      public storage: Storage,
      private navCtrl: NavController,
      private alertController: AlertController
    ) { 

    this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log(this.data.name)
        console.log(this.data.title)
      }
    });

  }

  ngOnInit() {
    
  }

  logOutApp(){
    this.presentAlertConfirm('Logout','Are you sure to logout on this app?');
  }

  async presentAlertConfirm(header: any,msg: any) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            // console.log('Confirm Okay');
            this.storage.clear();
            this.navCtrl.navigateRoot('/welcome');
          }
        }
      ]
    });

    await alert.present();
  }


}
