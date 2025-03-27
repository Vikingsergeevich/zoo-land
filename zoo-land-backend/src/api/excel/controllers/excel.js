'use strict';

const xlsx = require('xlsx');

module.exports = {
  async create(ctx) {
    try {
      console.log('Начало обработки Excel файла');
      const { data, files } = ctx.request;
      
      if (!files || !files.file) {
        console.error('Файл не найден в запросе');
        return ctx.badRequest('Пожалуйста, загрузите Excel файл');
      }

      const file = files.file;
      console.log('Получен файл:', file.name);

      const workbook = xlsx.read(file.data, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = xlsx.utils.sheet_to_json(worksheet);
      
      console.log('Данные из Excel:', JSON.stringify(excelData, null, 2));

      // Создаем новую запись Excel
      const entry = await strapi.entityService.create('api::excel.excel', {
        data: {
          name: file.name,
          data: excelData,
          publishedAt: new Date()
        },
        files: {
          file: file
        }
      });

      console.log('Создана запись Excel:', entry);

      // Создаем товары из данных Excel
      const createdProducts = [];
      for (const row of excelData) {
        try {
          console.log('Обработка строки:', JSON.stringify(row, null, 2));
          
          // Проверяем наличие обязательных полей
          if (!row.name) {
            console.warn('Пропущена строка без названия');
            continue;
          }

          // Находим категорию по ID или имени
          let categoryId = null;
          if (row.category) {
            console.log('Поиск категории:', row.category);
            const category = await strapi.db.query('api::category.category').findOne({
              where: {
                $or: [
                  { id: parseInt(row.category) || 0 },
                  { name: row.category }
                ]
              }
            });
            
            if (category) {
              categoryId = category.id;
              console.log('Найдена категория:', category.name, '(ID:', category.id, ')');
            } else {
              console.warn('Категория не найдена:', row.category);
            }
          }

          const productData = {
            name: row.name,
            description: row.description || '',
            price: parseFloat(row.price) || 0,
            stock: parseInt(row.stock) || 0,
            category: categoryId,
            publishedAt: new Date()
          };

          console.log('Создание товара с данными:', JSON.stringify(productData, null, 2));

          const product = await strapi.entityService.create('api::product.product', {
            data: productData
          });
          
          console.log('Создан товар:', JSON.stringify(product, null, 2));
          createdProducts.push(product);
        } catch (err) {
          console.error('Ошибка при создании товара:', err);
        }
      }

      console.log(`Всего создано товаров: ${createdProducts.length}`);

      return {
        entry,
        products: createdProducts,
        message: `Успешно создано ${createdProducts.length} товаров`
      };
    } catch (error) {
      console.error('Ошибка при обработке файла:', error);
      return ctx.badRequest('Ошибка при обработке файла: ' + error.message);
    }
  },

  // Получение списка загруженных файлов
  async find(ctx) {
    try {
      const entries = await strapi.entityService.findMany('api::excel.excel', {
        populate: ['file']
      });
      return entries;
    } catch (error) {
      return ctx.badRequest('Ошибка при получении списка файлов: ' + error.message);
    }
  }
}; 