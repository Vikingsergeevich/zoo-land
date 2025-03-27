# Zoo Land Project

Проект интернет-магазина зоотоваров, построенный на Nuxt.js (фронтенд) и Strapi (бэкенд).

## Требования

- Docker
- Docker Compose
- Node.js (для локальной разработки)

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/zoo-land.git
cd zoo-land
```

2. Создайте файл `.env` на основе `.env.example`:
```bash
cp .env.example .env
```

3. Отредактируйте файл `.env`, установив свои значения для паролей и URL.

## Запуск

1. Запустите проект с помощью Docker Compose:
```bash
docker-compose up -d
```

2. Дождитесь, пока все контейнеры запустятся (это может занять несколько минут).

3. Откройте в браузере:
- Фронтенд: http://localhost
- Админ-панель Strapi: http://localhost/admin
- phpMyAdmin: http://localhost:8080

## Разработка

### Фронтенд (Nuxt.js)
- Расположен в директории `zoo-land-frontend`
- Запускается на порту 3000
- Доступен через http://localhost

### Бэкенд (Strapi)
- Расположен в директории `zoo-land-backend`
- Запускается на порту 1337
- Админ-панель доступна через http://localhost/admin

### База данных
- MySQL 8.0
- Доступна через phpMyAdmin: http://localhost:8080
- Данные сохраняются в Docker volume `mysql-data`

## Остановка проекта

```bash
docker-compose down
```

## Удаление всех данных

```bash
docker-compose down -v
```

## Лицензия

MIT
