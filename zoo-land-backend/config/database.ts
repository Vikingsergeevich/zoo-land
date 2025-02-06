import path from 'path';

export default ({ env }) => {
  return {
    connection: {
      client: 'mysql', // Встановлюємо MySQL як клієнт
      connection: {
        host: env('DATABASE_HOST', 'localhost'), // Хост MySQL
        port: env.int('DATABASE_PORT', 3306), // Порт MySQL
        database: env('DATABASE_NAME', 'strapi'), // Назва бази даних
        user: env('DATABASE_USERNAME', 'strapi'), // Користувач MySQL
        password: env('DATABASE_PASSWORD', 'strapi'), // Пароль MySQL
        ssl: env.bool('DATABASE_SSL', false) && { // SSL опціонально
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { // Параметри пулу з'єднань
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000), // Таймаут
    },
  };
};
