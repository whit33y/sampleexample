import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sampleexample');
  private authService = inject(AuthService);

  protected isLoggedIn = signal(false);
  constructor() {
    effect(() => {
      const loggedIn = this.authService.isLoggedIn();
      this.isLoggedIn.set(loggedIn);
    });
  }

  logout() {
    this.authService.logout();
  }
}
