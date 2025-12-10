import { AppwriteDocument } from './appwrite-document.model';

export interface Categories extends AppwriteDocument {
  name: string;
  description?: string;
}
