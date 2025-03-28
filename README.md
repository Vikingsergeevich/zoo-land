# Zoo Land Project

Проект интернет-магазина зоотоваров, построенный на Nuxt.js (фронтенд) и Strapi (бэкенд).

## Требования

- Docker
- Docker Compose
- Git

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/zoo-land.git
cd zoo-land
```

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

## Первый запуск Strapi

1. При первом запуске перейдите по адресу http://localhost/admin/auth/register-admin
2. Создайте первого администратора, заполнив форму регистрации
3. После регистрации вы будете перенаправлены в админ-панель

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

## Возможные проблемы

1. Если возникает ошибка с портом 3306, это означает, что у вас уже запущен MySQL локально. В этом случае измените порт в `docker-compose.yml` на другой (например, 3307).

2. Если не работает админ-панель Strapi, проверьте:
   - Все ли контейнеры запущены: `docker-compose ps`
   - Логи бэкенда: `docker-compose logs zoo-land-backend`
   - Логи nginx: `docker-compose logs nginx`

## Лицензия

MIT
