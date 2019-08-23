import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, NotifyService } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  verifiedUser = { username: 'username', password: 'password' };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.loginForm();
    localStorage.setItem('verified', '');
  }

  login() {
    const { username, password } = this.form.value;
    const verifiedUser = this.verifiedUser.username === username &&
      this.verifiedUser.password === password;

    if (this.form.valid && verifiedUser) {
      this.router.navigateByUrl('pizzas');
      this.authService.setToken(username);
      this.notifyService.notify(`Welcome ${username}`, `Yeah!`);
    }
  }

  validateField(control: string, directive: NgForm) {
    return this.form.get(control).invalid && directive.submitted;
  }

  private loginForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
