import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

@Component({
  selector: 'app-td-card',
  templateUrl: './td-card.component.html',
  styleUrls: ['./td-card.component.scss'],
})
export class TdCardComponent implements AfterViewInit {
  @ViewChild("tdCard", { read: ElementRef, static: true })
  ref: ElementRef;

  @Output
    () match: EventEmitter<any> = new EventEmitter<any>();

  windowWidth = window.innerWidth;

  constructor(public gestureCtrl: GestureController, public renderer: Renderer2) { }

  ngAfterViewInit(): void {
    let gesture = this.gestureCtrl.create({
      el: this.ref.nativeElement,
      gestureName: 'tinder-swipe',
      onStart: () => {
        this.renderer.setStyle(this.ref.nativeElement, "transition", "none");
      },
      onMove: (ev) => {
        this.renderer.setStyle(this.ref.nativeElement, "transform", `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 20}deg)`);

        if(ev.deltaX<0){
          this.renderer.setStyle(this.ref.nativeElement, "background-color", `rgb(150 240 150 /${1-ev.deltaX/this.windowWidth})` );

        }
        else if(ev.deltaX>0){
          this.renderer.setStyle(this.ref.nativeElement, "background-color", `rgb(250 175 175 /${1-ev.deltaX/this.windowWidth})` );
        }
      },
      onEnd: (ev) => {

        this.renderer.setStyle(this.ref.nativeElement, "transition", "0.3s ease-out");

        if (ev.deltaX > this.windowWidth / 2) {
          this.renderer.setStyle(this.ref.nativeElement, "transform", "translateX(400px");
          this.match.emit({ result: true, element: this.ref.nativeElement });
        } else if (ev.deltaX < -this.windowWidth / 2) {
          this.renderer.setStyle(this.ref.nativeElement, "transform", "translateX(-400px");
          this.match.emit({ result: true, element: this.ref.nativeElement });
        } else {
          this.renderer.setStyle(this.ref.nativeElement, "transform", "translateX(0px");
          this.renderer.setStyle(this.ref.nativeElement,"background-color", "white");
        }
      },
    });
    
    gesture.enable(true);
  }
}