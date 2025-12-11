export interface AppwriteDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $sequence: number;
  $tableId: string;
  $databaseId: string;
  $permissions: string[];
}
