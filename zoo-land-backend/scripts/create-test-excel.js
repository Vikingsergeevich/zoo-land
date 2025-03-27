const XLSX = require('xlsx');

// Тестовые данные
const products = [
  {
    name: 'Корм для собак Premium',
    price: 1500,
    description: 'Высококачественный корм для взрослых собак',
    category: 'Корма',
    stock: 100,
    image: 'https://example.com/dog-food.jpg'
  },
  {
    name: 'Игрушка для кошек "Мышка"',
    price: 300,
    description: 'Интерактивная игрушка для кошек',
    category: 'Игрушки',
    stock: 50,
    image: 'https://example.com/cat-toy.jpg'
  },
  {
    name: 'Наполнитель для грызунов',
    price: 500,
    description: 'Гигиенический наполнитель для клеток грызунов',
    category: 'Гигиена',
    stock: 200,
    image: 'https://example.com/bedding.jpg'
  }
];

// Создаем рабочую книгу
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(products);

// Настраиваем ширину колонок
const colWidths = [
  { wch: 30 }, // name
  { wch: 10 }, // price
  { wch: 50 }, // description
  { wch: 20 }, // category
  { wch: 10 }, // stock
  { wch: 40 }  // image
];
ws['!cols'] = colWidths;

// Добавляем лист в книгу
XLSX.utils.book_append_sheet(wb, ws, 'Товары');

// Сохраняем файл
XLSX.writeFile(wb, 'test-products.xlsx');

console.log('Тестовый Excel-файл создан: test-products.xlsx'); 