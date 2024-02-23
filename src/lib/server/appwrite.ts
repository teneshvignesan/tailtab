import { Client, Databases, Account } from 'appwrite';
import { PUBLIC_APPWRITE_URL, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

const client = new Client();
client.setEndpoint(PUBLIC_APPWRITE_URL).setProject(PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
