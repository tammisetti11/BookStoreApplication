import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  opened=false;
  actionhome(){
    this.router.navigate(['./home'])
  }
  actionlogin(){
    this.router.navigate(['./'])
  }
  actionMyorders(){
    this.router.navigate(['./booksdata'])
  }
  actionCart(){
    this.router.navigate(['./cart'])
  }
  actionFavorites(){
    this.router.navigate(['./favorites'])
  }
}
