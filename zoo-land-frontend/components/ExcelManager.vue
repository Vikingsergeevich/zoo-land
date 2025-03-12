<template>
  <div class="excel-manager p-4">
    <div class="flex gap-4 mb-4">
      <button 
        @click="exportToExcel" 
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Экспорт в Excel
      </button>
      <div class="relative">
        <input
          type="file"
          ref="fileInput"
          @change="importFromExcel"
          accept=".xlsx, .xls"
          class="hidden"
        />
        <button 
          @click="$refs.fileInput.click()"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Импорт из Excel
        </button>
      </div>
    </div>
    
    <!-- Добавляем предпросмотр данных -->
    <div v-if="previewData.length" class="mt-4">
      <h3 class="font-bold mb-2">Предпросмотр данных:</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border">
          <thead>
            <tr>
              <th v-for="header in Object.keys(previewData[0])" 
                  :key="header" 
                  class="border p-2 bg-gray-100">
                {{ header }}
              </th>
              <th class="border p-2 bg-gray-100">Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in previewData.slice(0, 5)" :key="index">
              <td v-for="header in Object.keys(previewData[0])" 
                  :key="header" 
                  class="border p-2">
                {{ row[header] }}
              </td>
              <td class="border p-2">
                <span :class="[
                  'px-2 py-1 rounded text-xs',
                  isNewProduct(row) ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                ]">
                  {{ isNewProduct(row) ? 'Новый' : 'Обновление' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <div class="text-sm text-gray-600">
          Всего товаров: {{ previewData.length }}
          (Новых: {{ newProductsCount }}, Обновлений: {{ updateProductsCount }})
        </div>
        <button 
          @click="confirmImport" 
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Подтвердить импорт
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import * as XLSX from 'xlsx';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['import-success', 'export-success']);
const fileInput = ref(null);
const previewData = ref([]);
const importedData = ref(null);

// Подсчет новых и обновляемых товаров
const newProductsCount = computed(() => 
  previewData.value.filter(row => isNewProduct(row)).length
);

const updateProductsCount = computed(() => 
  previewData.value.filter(row => !isNewProduct(row)).length
);

// Проверка, является ли товар новым
const isNewProduct = (product) => {
  return !props.products.some(p => p.id === product.id);
};

// Функция для экспорта данных в Excel
const exportToExcel = () => {
  try {
    // Используем реальные данные из props
    const products = props.products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description || '',
      category: product.category || '',
      stock: product.stock || 0
    }));

    // Создаем рабочую книгу
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(products);

    // Настраиваем ширину колонок
    const colWidths = [
      { wch: 5 },  // id
      { wch: 30 }, // name
      { wch: 10 }, // price
      { wch: 50 }, // description
      { wch: 20 }, // category
      { wch: 10 }  // stock
    ];
    ws['!cols'] = colWidths;

    // Добавляем лист в книгу
    XLSX.utils.book_append_sheet(wb, ws, 'Товары');

    // Сохраняем файл
    XLSX.writeFile(wb, 'products.xlsx');
    
    emit('export-success');
  } catch (error) {
    console.error('Ошибка при экспорте:', error);
    alert('Произошла ошибка при экспорте данных');
  }
};

// Функция для импорта данных из Excel
const importFromExcel = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      // Валидация данных
      const validatedData = jsonData.map(row => ({
        id: parseInt(row.id) || 0,
        name: row.name || '',
        price: parseFloat(row.price) || 0,
        description: row.description || '',
        category: row.category || '',
        stock: parseInt(row.stock) || 0
      }));

      // Сохраняем данные для предпросмотра
      previewData.value = validatedData;
      importedData.value = validatedData;

      // Очищаем input
      event.target.value = '';
    } catch (error) {
      console.error('Ошибка при импорте:', error);
      alert('Произошла ошибка при импорте файла');
    }
  };
  reader.readAsArrayBuffer(file);
};

// Функция подтверждения импорта
const confirmImport = () => {
  if (importedData.value) {
    emit('import-success', importedData.value);
    previewData.value = [];
    importedData.value = null;
  }
};
</script>

<style scoped>
.excel-manager {
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}
</style> 