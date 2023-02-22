import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { NgModule } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  myClassPosition: any;
  sections: string[] = ['home', 'about', 'features', 'contact']
  currentSection: any;
  constructor(private scroller: ViewportScroller, private router: Router) {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {

      const element = document.getElementById(section);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < viewHeight / 2) {

          console.log(rect.top)
          if (rect.top >203 ) {
            this.myClassPosition = '51';
          }else{
            this.myClassPosition = '0';
          }

          console.log(rect.top+":"+(rect.top < viewHeight / 2)+":"+this.myClassPosition)
          this.currentSection.next(section);
        }
      } else {
      }
    }
  }

  ngOnInit(): void {
    this.router.navigate(["/"]);

  }
  goDown1() {
    this.scroller.scrollToAnchor("targetRed");
  }
  goDown0() {
    this.scroller.scrollToAnchor("human-text");
  }
  goDown2() {
    this.scroller.scrollToAnchor("second-text");
  }
  goDown3() {
    this.scroller.scrollToAnchor("pricing-text");
  }
}




