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

  async handleLogin(credentials: Authentication) {
    try {
      await this.authService.login(credentials.email, credentials.password);
    } catch (error) {
      console.error(error);
    }
  }
}
