import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonials = [
    {content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', user: {name: 'Client Name', country:'Position, Org'}},
    {content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters', user: {name: 'Client Name', country:'Position, Org'}},
    {content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', user: {name: 'Client Name', country:'Position, Org'}}
  ];

  constructor() { }

  ngOnInit() {
  }

}
