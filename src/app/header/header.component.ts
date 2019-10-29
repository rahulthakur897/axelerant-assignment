import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isWeb: boolean;
  isMobileMenu: boolean = false;
  @ViewChild('navMenu', {static: false}) navMenuRef: ElementRef;
  constructor() { }

  @HostListener("window:resize", [])
  private onResize() {
    this.getDeviceType();
  }

  ngOnInit() {
    this.getDeviceType();
  }

  getDeviceType(){
    console.log('called');
		//check isWeb on page refresh & toggle screen
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) ) {
        this.isWeb = false;
        this.isMobileMenu = true;
	    } else {
        this.isWeb = true;
        this.isMobileMenu = false;
	    }
  }
  
  toggleMenu(navMenu: HTMLInputElement){ 
    this.isMobileMenu = !this.navMenuRef.nativeElement.hidden;
  }

}
