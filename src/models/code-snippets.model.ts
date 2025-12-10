import { AppwriteDocument } from './appwrite-document.model';

export interface CodeSnippets extends AppwriteDocument {
  title: string;
  code_sample: string;
  description?: string;
  language?: string;
  categories_id?: string;
}
