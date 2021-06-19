import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adheader',
  templateUrl: './adheader.component.html',
  styleUrls: ['./adheader.component.css']
})
export class AdheaderComponent implements OnInit {

  constructor(private route:Router) { }
  opened=false;
  ngOnInit(): void {
  }
  actionlogin(){
    this.route.navigate(['./'])
  }
  actionhome(){
    this.route.navigate(['./adminhome'])
  }
  actionaddProducts(){
    this.route.navigate(['./adminproducts'])
  }
  actionadOrders(){
    this.route.navigate(['./adminorders'])
  }
}
