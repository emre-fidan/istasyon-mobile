import { AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { GestureController } from '@ionic/angular';
import { JobAdBusiness } from 'src/app/business/JobAdBusiness';
import { JobAdDto } from 'src/app/entities/DTO/JobAdDto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listingJobAds = [
    { "name": "Ad1", "Salary": 13000, "distance": "3km", "benefits": ["Yol", "Yemek"] },
    { "name": "Ad2", "Salary": 8300, "distance": "4.2km", "benefits": ["Yol", "Yemek", "Prim"] },
    { "name": "Ad3", "Salary": 23500, "distance": "7km", "benefits": ["Yemek", "Prim"] },
    { "name": "Ad4", "Salary": 17002, "distance": "12km", "benefits": ["Yol", "Yemek"] },

  ];

  public likedAds = []
  public discardedAds = []
  public isSwipeViewSelected = true;

  constructor(private business: JobAdBusiness) { }

  public onLike() {
    let index = this.listingJobAds.length - 1;

    this.likedAds.push(this.listingJobAds[index])

    this.listingJobAds.splice(index, 1);

    console.log(this.listingJobAds);
  }

  public onDiscard() {
    let index = this.listingJobAds.length - 1;

    this.discardedAds.push(this.listingJobAds[index])

    this.listingJobAds.splice(index, 1);

    console.log(this.listingJobAds);
  }

  handleMatch(ev) {
    if (ev.result) {
      console.log("It's a match!");
      this.onLike();
    } else {
      console.log('Maybe next time');
      this.onDiscard();
    }

    ev.element.parentElement.remove();
  }
}
