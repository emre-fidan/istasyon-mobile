import { Component, OnInit } from '@angular/core';
import { AccountBusiness } from 'src/app/business/accountBusiness';
import { VerifyMailRequest } from 'src/app/entities/DTO/VerifyMailRequest';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private business: AccountBusiness) { }

  ngOnInit() {
  }

  public testRequest() {
    this.business.GetDashboard().subscribe((x)=>{
      console.log(x)
    });
  }

}