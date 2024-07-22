
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { LoginRequest } from '../interfaces/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: ['',[Validators.required]],
    password: ['',Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ){}

  login(){
    if(this.loginForm.valid){
      this.usersService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (response)=> {
          sessionStorage.setItem("token", response.access)
          this.router.navigate([''])
        },
        error: (error)=> {
          alert('It was not possible to validate the credentials')
          console.log(error)
        },
      })
    }
  }
}
