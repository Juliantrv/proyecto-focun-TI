import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavbarComponent {
  closeNavbar = false
  close = true

  closeMenu(){
    this.close = !this.close
  }
  closeNav(){
    this.closeNavbar = !this.closeNavbar
  }

}