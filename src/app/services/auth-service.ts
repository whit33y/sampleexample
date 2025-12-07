import { Injectable, signal, computed } from '@angular/core';
import { account, ID } from '../../lib/appwrite';
import { Models } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly currentUser = signal<Models.User<Models.Preferences> | null>(null);
  readonly isLoggedIn = computed(() => !!this.currentUser());

  constructor() {
    this.restoreSession();
  }

  async login(email: string, password: string) {
    await account.createEmailPasswordSession({
      email,
      password,
    });
    this.currentUser.set(await account.get());
  }

  async register(email: string, password: string, name: string) {
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession({
      sessionId: 'current',
    });
    this.currentUser.set(null);
  }

  async restoreSession() {
    try {
      const user = await account.get();
      this.currentUser.set(user);
    } catch {
      this.currentUser.set(null);
    }
  }
}
