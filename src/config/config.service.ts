import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'localpgdb',

      entities: ['dist/**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

    };
  }

}

const configService = new ConfigService()

export { configService };
