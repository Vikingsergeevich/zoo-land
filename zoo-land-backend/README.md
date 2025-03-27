# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# Zoo-Land Backend

## Загрузка товаров через Excel

### Формат Excel файла

Excel файл должен содержать следующие колонки:

| Колонка | Тип | Описание |
|---------|-----|----------|
| name | Текст | Название товара |
| description | Текст | Описание товара |
| price | Число | Цена товара |
| stock | Число | Количество на складе |
| category | ID | ID категории из Strapi |

Пример содержимого Excel файла:

| name | description | price | stock | category |
|------|-------------|-------|-------|----------|
| Корм для кошек | Премиум корм | 999.99 | 100 | 1 |
| Игрушка для собак | Мячик | 299.99 | 50 | 2 |

### Как загрузить файл

1. Войдите в админ-панель Strapi (http://localhost:1337/admin)
2. Перейдите в раздел "Content Manager" -> "Excel"
3. Нажмите "Create new entry"
4. Заполните поля:
   - Name: название для вашего импорта
   - File: выберите подготовленный Excel файл
5. Нажмите "Save"

После загрузки файла, система автоматически:
1. Обработает данные из Excel
2. Создаст новые товары в системе
3. Свяжет товары с указанными категориями

### Примечания

- Перед загрузкой убедитесь, что категории уже созданы в системе
- ID категорий можно посмотреть в админ-панели Strapi в разделе "Categories"
- Если какое-то поле не заполнено, будут использованы значения по умолчанию
- При возникновении ошибок, проверьте формат данных в Excel файле
