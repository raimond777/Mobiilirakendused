import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public loadingCtrl: LoadingController) {}
async openSocial(network: string, fab:
   HTMLIonFabElement) {
  const loading = await this.loadingCtrl.create({
    message: `Posting to ${network}`,
    duration: (Math.random() * 1000) + 500
  });
  await loading.present();
  await loading.onWillDismiss();
  fab.close();
  }
}

