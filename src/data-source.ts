import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { validate } from './common/utils/env-validation';

// Cargar variables de entorno
config();

const configService = new ConfigService(validate(process.env));

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  username: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  database: configService.get<string>('POSTGRES_DB'),
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.js'], // Asegúrate de que las migraciones estén compiladas
  entities: ['dist/**/*.entity.js'], // Asegúrate de que las entidades estén compiladas
  synchronize: false, // Desactiva sincronización para evitar problemas
});
