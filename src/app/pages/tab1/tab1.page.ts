import { Component, OnInit } from '@angular/core';
import { AccountBusiness } from 'src/app/business/AccountBusiness';
import { VerifyMailRequest } from 'src/app/entities/DTO/VerifyMailRequest';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private business: AccountBusiness) { }

  public greetings = "Hoşgeldin ".concat(sessionStorage.getItem("name"));

  public notifications=[
    {"id":1, "type":"Onay", message:"Başvuru Onayı"},
    {"id":2, "type":"Ret", message:"Başvurunuz Reddedildi"},
    {"id":3, "type":"Talep", message:"Belge Talep Edildi"},
    {"id":4, "type":"Mülakat", message:"Mülakata Çağrı Talebi"},
  ]

  ngOnInit() {
  }

  public testRequest() {
    this.business.GetDashboard().subscribe((x)=>{
      console.log(x)
    });
  }

  public removeNotification(x) {
    let index=this.notifications.findIndex(q=>q.id==x.id);

    this.notifications.splice(index,1);
  }

}