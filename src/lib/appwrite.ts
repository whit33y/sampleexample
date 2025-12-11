import { Client, Account, TablesDB } from 'appwrite';
import { environment } from '../environments/environment';

export const client = new Client();

client.setEndpoint(environment.appwriteEndpoint).setProject(environment.appwriteProjectId);

export const account = new Account(client);
export const tablesDb = new TablesDB(client);
export { ID } from 'appwrite';
