import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

export interface ContactRecord {
  id?: number;
  name: string;
  organisation?: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
  mailStatus?: 'pending' | 'sent' | 'failed';
  mailError?: string;
  createdAt?: string;
}

let dbInstance: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (dbInstance) return dbInstance;

  const rawPath = process.env.DB_PATH || './data/sre.sqlite';
  const resolvedPath = path.isAbsolute(rawPath)
    ? rawPath
    : path.resolve(process.cwd(), rawPath);

  const dir = path.dirname(resolvedPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new DatabaseSync(resolvedPath);

  // Optimisations de performance et intégrité SQLite
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA foreign_keys = ON;');

  // Création de la table de stockage des contacts
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      organisation TEXT,
      email TEXT NOT NULL,
      phone TEXT,
      topic TEXT NOT NULL,
      message TEXT NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      mail_status TEXT DEFAULT 'pending',
      mail_error TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);
  `);

  dbInstance = db;
  return dbInstance;
}

export function saveContactMessage(entry: Omit<ContactRecord, 'id' | 'createdAt'>): number {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO contacts (
      name, organisation, email, phone, topic, message, ip_address, user_agent, mail_status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    entry.name,
    entry.organisation || null,
    entry.email,
    entry.phone || null,
    entry.topic,
    entry.message,
    entry.ipAddress || null,
    entry.userAgent || null,
    entry.mailStatus || 'pending'
  );

  return Number(result.lastInsertRowid);
}

export function updateMailStatus(id: number, status: 'sent' | 'failed', error?: string): void {
  const db = getDb();
  const stmt = db.prepare(`
    UPDATE contacts
    SET mail_status = ?, mail_error = ?
    WHERE id = ?
  `);
  stmt.run(status, error || null, id);
}

export function getRecentMessages(limit = 50): ContactRecord[] {
  const db = getDb();
  const stmt = db.prepare(`
    SELECT 
      id, name, organisation, email, phone, topic, message, 
      ip_address AS ipAddress, user_agent AS userAgent, 
      mail_status AS mailStatus, mail_error AS mailError, 
      created_at AS createdAt
    FROM contacts
    ORDER BY id DESC
    LIMIT ?
  `);
  return stmt.all(limit) as unknown as ContactRecord[];
}
