import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  authenticated = 'false';
  links = [
    { path: 'login', icon: 'home', title: 'Login' },
    { path: 'pizzas', icon: 'format_list_bulleted', title: 'Pizza\' List' }
  ];

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  routeToLogin() {
    this.router.navigateByUrl('login');
    this.authService.setToken();
  }
}
