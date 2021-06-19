import { MaterialModule } from './../../material-module/material-module.module';
import { RouterModule ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  actionHome(){
    this.router.navigate(['./home'])
  }

}
