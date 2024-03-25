import { Component } from '@angular/core';
import { AccountBusiness } from 'src/app/business/AccountBusiness';
import { JobAdBusiness } from 'src/app/business/JobAdBusiness';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private business: JobAdBusiness) {}


  public async logout(){
    document.cookie.replace("Auth-B","");

    this.business.GetJobAd().subscribe((x)=>{
      console.log(x);
    });
  }
}
