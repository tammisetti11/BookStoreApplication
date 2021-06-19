import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addashboard',
  templateUrl: './addashboard.component.html',
  styleUrls: ['./addashboard.component.css']
})
export class AddashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards =  [
    { id:1,title: 'Ramayanam',dis:"ss",price:'2000' },
    { id:2,title: 'MahaBaratham',dis:"bb",price:'3000' },
    { id:3,title: 'Half-girlfriend',dis:"cc",price:'4000' },
    { id:4,title: 'Rich dad Poor dad',dis:"dd",price:'6000' },
    { id:5,title: 'Moneyball',dis:"ss",price:'6000' }
  ];  

}
