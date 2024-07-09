import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(
    private usersService:UsersService,
    private router: Router
  ){}

  singOut(){
    this.usersService.signOut()
    this.router.navigate(['login'])
  }
}
