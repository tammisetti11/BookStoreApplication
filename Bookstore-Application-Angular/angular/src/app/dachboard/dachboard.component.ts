import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dachboard',
  templateUrl: './dachboard.component.html',
  styleUrls: ['./dachboard.component.css']
})
export class DachboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards =  [
          { id:1,title: 'Ramayanam',dis:"ss",price:'2000' },
          { id:2,title: 'MahaBaratham',dis:"bb",price:'3000' },
          { id:3,title: 'Half-girlfriend',dis:"cc",price:'4000' },
          { id:4,title: 'Rich dad Poor dad',dis:"dd",price:'6000' },
          { id:5,title: 'Moneyball',dis:"ss",price:'6000' }
        ];  
         ngOnInit(): void {
         }   
        opened=true;
  constructor(private breakpointObserver: BreakpointObserver) {}
}
