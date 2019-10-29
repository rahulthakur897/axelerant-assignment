import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  baseUrl:String ="../../assets/images/"
  boxData = [
    {imgSrc: this.baseUrl+ 'staffing.png', imgType: 'Service Name'},
    {imgSrc: this.baseUrl+ 'group.png', imgType: 'Service Name'},
    {imgSrc: this.baseUrl+ 'service.png', imgType: 'Service Name'}
  ];

  constructor() { }

  ngOnInit() {
  }



}
