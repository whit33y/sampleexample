import { Component, inject } from '@angular/core';
import { AuthForm } from '../../components/auth/auth-form/auth-form';
import { AuthService } from '../../services/auth-service';
import { Authentication } from '../../components/auth/auth-form/authentication';

@Component({
  selector: 'app-auth',
  imports: [AuthForm],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.scss',
})
export class AuthPage {
  private authService = inject(AuthService);

  handleLogin(credentials: Authentication) {
    console.log(credentials);
  }
}
