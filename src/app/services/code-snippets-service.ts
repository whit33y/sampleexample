import { Injectable } from '@angular/core';
import {
  CodeSnippetsAppwriteDocument,
  CodeSnippetsResponse,
} from '../../models/code-snippets.model';
import { tablesDb } from '../../lib/appwrite';
import { environment } from '../../environments/environment';
import { Query } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class CodeSnippetsService {
  async getAllCodeSnippets(userId: string): Promise<CodeSnippetsResponse[]> {
    const response = await tablesDb.listRows<CodeSnippetsAppwriteDocument>({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'code_snippets',
      queries: [Query.equal('userId', userId)],
    });
    return response.rows.map((row) => ({
      $id: row.$id,
      $createdAt: row.$createdAt,
      $updatedAt: row.$updatedAt,
      title: row.title,
      codeSample: row.codeSample,
      description: row.description,
      language: row.language,
      categoriesId: row.categoriesId,
    }));
  }

  async getCodeSnippetsByCategory(
    userId: string,
    categoryId: string,
  ): Promise<CodeSnippetsResponse[]> {
    const response = await tablesDb.listRows<CodeSnippetsAppwriteDocument>({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'code_snippets',
      queries: [Query.equal('userId', userId), Query.equal('categoryId', categoryId)],
    });
    return response.rows.map((row) => ({
      $id: row.$id,
      $createdAt: row.$createdAt,
      $updatedAt: row.$updatedAt,
      title: row.title,
      codeSample: row.codeSample,
      description: row.description,
      language: row.language,
      categoriesId: row.categoriesId,
    }));
  }

  async getCodeSnippetsSearch(userId: string, searchTerm: string): Promise<CodeSnippetsResponse[]> {
    const response = await tablesDb.listRows<CodeSnippetsAppwriteDocument>({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'code_snippets',
      queries: [Query.equal('userId', userId), Query.search('codeSample', searchTerm)],
    });
    return response.rows.map((row) => ({
      $id: row.$id,
      $createdAt: row.$createdAt,
      $updatedAt: row.$updatedAt,
      title: row.title,
      codeSample: row.codeSample,
      description: row.description,
      language: row.language,
      categoriesId: row.categoriesId,
    }));
  }
}
