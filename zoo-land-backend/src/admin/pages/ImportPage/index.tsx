import React, { useState } from 'react';
import { Box, Button, Typography, Alert } from '@strapi/design-system';
import { useNotification } from '@strapi/helper-plugin';

const ImportPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const toggleNotification = useNotification();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImport = async () => {
    if (!selectedFile) {
      toggleNotification({
        type: 'warning',
        message: 'Пожалуйста, выберите файл Excel',
      });
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/excel/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toggleNotification({
          type: 'success',
          message: data.message,
        });
        setSelectedFile(null);
      } else {
        toggleNotification({
          type: 'error',
          message: 'Ошибка при импорте файла',
        });
      }
    } catch (error) {
      console.error('Ошибка:', error);
      toggleNotification({
        type: 'error',
        message: 'Ошибка при импорте файла',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box padding={8} background="neutral100">
      <Typography variant="alpha">Импорт товаров из Excel</Typography>
      <Box paddingTop={4}>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          style={{ marginBottom: '1rem' }}
        />
        <Button
          onClick={handleImport}
          loading={loading}
          disabled={!selectedFile}
        >
          Импортировать
        </Button>
      </Box>
    </Box>
  );
};

export default ImportPage; 