import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../services/auth-api.service';
import { Router } from '@angular/router';
import { tokenInterface } from '../../models/interfaceToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authApiService: AuthApiService, private router: Router) { }

  public app_name = "Sign in";
  private token: tokenInterface = {
    grant_type: 'password',
    client_id: 1,
    client_secret: 'OdK6Snl6inYIt2Khalqci0tXWgHjB6BKWdV7SkeZ',
    username: '',
    password: ''
  }

  ngOnInit() { }

  onLogin() {
    return this.authApiService.login(this.token.grant_type, this.token.client_id, this.token.client_secret, this.token.username, this.token.password)
      .subscribe(
        data => {
          this.authApiService.setUser(data);
          this.router.navigate(['/home']);
          // console.log(data);
        },
        error => console.log(error)
      );
  }
}
