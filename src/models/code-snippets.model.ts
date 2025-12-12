import { AppwriteDocument } from './appwrite-document.model';

export interface CodeSnippetsAppwriteDocument extends AppwriteDocument {
  title: string;
  codeSample: string;
  userId: string;
  description?: string;
  language?: string;
  categoriesId?: string;
}

export interface CodeSnippetsResponse {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title: string;
  codeSample: string;
  description?: string;
  language?: string;
  categoriesId?: string;
}
