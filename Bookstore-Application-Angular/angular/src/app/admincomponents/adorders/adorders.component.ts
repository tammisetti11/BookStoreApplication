import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adorders',
  templateUrl: './adorders.component.html',
  styleUrls: ['./adorders.component.css']
})
export class AdordersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards =  [
    { id:1,orderid:'111111',title: 'Ramayanam',userid:"aaaaaaa",price:'2000' },
    { id:2,orderid:'222222',title: 'MahaBaratham',userid:"bbbbbb",price:'3000' },
    { id:3,orderid:'333333',title: 'Half-girlfriend',userid:"ccccccc",price:'4000' },
    { id:4,orderid:'444444',title: 'Rich dad Poor dad',userid:"dddddd",price:'6000' },
    { id:5,orderid:'555555',title: 'Moneyball',userid:"eeeeee",price:'6000' }
  ];  
}
