import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    {
      img: 'assets/images/img-1.svg',
      text:'Air Cargo'
    },
    {
      img: 'assets/images/img-2.svg',
      text:'Sea Cargo'
    },
    {
      img: 'assets/images/img-3.svg',
      text:'Ground Transport'
    },
    {
      img: 'assets/images/img-4.svg',
      text:'Logistics Service'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
