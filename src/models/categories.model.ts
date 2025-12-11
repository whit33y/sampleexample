import { AppwriteDocument } from './appwrite-document.model';

export interface CategoryAppwriteDocument extends AppwriteDocument {
  name: string;
  userId: string;
  description?: string;
}

export interface CategoryResponse {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  userId?: string;
  description?: string;
}
