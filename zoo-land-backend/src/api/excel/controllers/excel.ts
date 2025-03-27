import { factories } from '@strapi/strapi';
import * as XLSX from 'xlsx';

interface ExcelRow {
  name?: string;
  price?: string | number;
  description?: string;
  category?: string;
  stock?: string | number;
  image?: string;
}

interface UploadFile {
  id: number;
  name: string;
  url: string;
  size: number;
  mime: string;
}

interface ExcelRecord {
  id: number;
  file: UploadFile;
}

export default factories.createCoreController('api::excel.excel', ({ strapi }) => ({
  async uploadExcel(ctx) {
    try {
      console.log('Начало обработки Excel файла');
      const { id } = ctx.params;
      
      // Получаем запись Excel из Content Manager
      const excelRecord = await strapi.entityService.findOne('api::excel.excel', id, {
        populate: ['file']
      }) as unknown as ExcelRecord;

      if (!excelRecord || !excelRecord.file) {
        console.error('Файл не найден в Content Manager');
        return ctx.badRequest('Файл не найден');
      }

      console.log('Чтение файла Excel:', excelRecord.file.name);
      // Получаем содержимое файла
      const fileBuffer = await strapi.plugins.upload.services.upload.download(excelRecord.file);
      
      // Читаем содержимое файла
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelRow[];

      console.log('Количество строк в файле:', jsonData.length);

      let importedCount = 0;

      // Валидация и преобразование данных
      for (const row of jsonData) {
        try {
          console.log('Обработка строки:', row);
          
          if (!row.name || !row.category) {
            console.error('Пропущена строка: отсутствует название или категория', row);
            continue;
          }

          // Находим категорию по имени
          console.log('Поиск категории:', row.category);
          const categories = await strapi.entityService.findMany('api::category.category', {
            filters: {
              name: row.category
            }
          });

          console.log('Найденные категории:', categories);

          if (!categories || categories.length === 0) {
            console.error(`Категория "${row.category}" не найдена`);
            continue;
          }

          // Создаем товар с привязкой к категории
          const product = {
            data: {
              name: row.name,
              price: parseFloat(String(row.price)) || 0,
              description: row.description || '',
              stock: parseInt(String(row.stock)) || 0,
              image: row.image || '',
              category: categories[0].id,
              publishedAt: new Date()
            }
          };

          console.log('Создание товара:', product);
          await strapi.entityService.create('api::product.product', product);
          console.log('Товар успешно создан');
          importedCount++;
        } catch (error) {
          console.error('Ошибка при создании товара:', error);
        }
      }

      console.log('Импорт завершен. Всего импортировано:', importedCount);
      return {
        success: true,
        message: `Успешно импортировано ${importedCount} товаров`,
        count: importedCount
      };

    } catch (error) {
      console.error('Ошибка при импорте Excel:', error);
      return ctx.badRequest('Ошибка при обработке файла');
    }
  }
})); 