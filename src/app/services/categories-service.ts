import { Injectable } from '@angular/core';
import { tablesDb } from '../../lib/appwrite';
import { CategoryResponse, CategoryAppwriteDocument } from '../../models/categories.model';
import { environment } from '../../environments/environment';
import { ID, Query } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  async getCategories(userId: string): Promise<CategoryResponse[]> {
    const response = await tablesDb.listRows<CategoryAppwriteDocument>({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'categories',
      queries: [Query.equal('userId', userId)],
    });
    return response.rows.map((row) => ({
      $id: row.$id,
      $createdAt: row.$createdAt,
      $updatedAt: row.$updatedAt,
      name: row.name,
    }));
  }

  async getCategory(categoryId: string): Promise<CategoryResponse> {
    const response = await tablesDb.getRow<CategoryAppwriteDocument>({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'categories',
      rowId: categoryId,
    });

    return {
      $id: response.$id,
      $createdAt: response.$createdAt,
      $updatedAt: response.$updatedAt,
      name: response.name,
      userId: response.userId,
      description: response.description,
    };
  }

  async postCategory(userId: string, name: string, description?: string) {
    const response = await tablesDb.createRow({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'cartegories',
      rowId: ID.unique(),
      data: {
        name,
        description,
        userId,
      },
    });
    return response;
  }

  async deleteCategory(rowId: string) {
    const response = await tablesDb.deleteRow({
      databaseId: environment.appwriteDatabaseId,
      tableId: 'categories',
      rowId: rowId,
    });
    return response;
  }
}
