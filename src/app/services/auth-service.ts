import { Injectable, signal, computed } from '@angular/core';
import { account, ID } from '../../lib/appwrite';
import { Models } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<Models.User<Models.Preferences> | null>(null);
  isLoggedIn = computed(() => !!this.currentUser());

  constructor() {
    this.restoreSession();
  }

  async login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession({ email, password });
      const user = await account.get();
      this.currentUser.set(user);
      return user;
    } catch (error) {
      this.currentUser.set(null);
      throw error;
    }
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
