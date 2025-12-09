import { email, minLength, required, schema } from '@angular/forms/signals';

export interface Authentication {
  email: string;
  password: string;
}

export const initialData: Authentication = {
  email: '',
  password: '',
};

export const authSchema = schema<Authentication>((rootPath) => {
  required(rootPath.email, {
    message: 'Your email address is required to receive our newsletter.',
  });
  email(rootPath.email, { message: 'Please enter a valid email address.' });
  minLength(rootPath.email, 6, { message: 'Your email must be at least 6 characters long.' });
  minLength(rootPath.password, 8, { message: 'Password must have at least 8 characters.' });
  required(rootPath.password, { message: 'Password is required.' });
});
