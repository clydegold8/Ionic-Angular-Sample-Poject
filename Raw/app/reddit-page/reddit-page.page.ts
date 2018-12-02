import { Component, OnInit } from '@angular/core';
import { RedditService} from '../reddit.service';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-reddit-page',
  templateUrl: './reddit-page.page.html',
  styleUrls: ['./reddit-page.page.scss'],
  providers: [RedditService]
})
export class RedditPagePage implements OnInit {

  public redditFeeds: any;


  constructor(private redditService: RedditService, public loadingController: LoadingController, public toastController: ToastController) {
    this.redditFeeds = [];
  }

  ngOnInit() {
    // get the feed from the reddit service
    this.getFeed();
  }


  async getFeed() {
    // show loading screen when fetching data from API
    const loading = await this.loadingController.create({
      message: 'Pulling Latest Popular Subreddit'
    });
    loading.present();

    this.redditService.getConfig().subscribe((resp) => {
      this.redditFeeds = resp.body.data.children;
      loading.dismiss(); // when data is finished fecthed, dismiss loading screen
      console.log(this.redditFeeds,'data');
   });
  }

  doRefresh(event) {
    this.getFeed();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Page under construction',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
