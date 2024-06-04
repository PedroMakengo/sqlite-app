import { type SQLiteDatabase } from 'expo-sqlite'

// Criar o meu script SQL
export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL, 
      quantity INTEGER NOT NULL
    );
  `)
}
