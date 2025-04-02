import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { ContactMessage } from '../contact/domain/model/ContactMessage';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  synchronize: true,
  entities: [ContactMessage],
  migrations: ['src/migrations/*.{js,ts}'],
  migrationsTableName: 'migrations',
  subscribers: [],
});
