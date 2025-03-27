'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/api/excel/:id',
      handler: 'excel.uploadExcel',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/excel',
      handler: 'excel.find',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
}; 