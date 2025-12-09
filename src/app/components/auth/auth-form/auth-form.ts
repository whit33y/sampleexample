import { Component, output, signal } from '@angular/core';
import { Authentication, authSchema, initialData } from './authentication';
import { Field, form, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-auth-form',
  imports: [Field],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.scss',
})
export class AuthForm {
  private authModel = signal<Authentication>(initialData);
  protected authForm = form(this.authModel, authSchema);

  readonly submitted = output<{ email: string; password: string }>();

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.authForm, async () => {
      this.submitted.emit(this.authModel());
    });
  }
}
