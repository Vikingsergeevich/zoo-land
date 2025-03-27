export default {
  routes: [
    {
      method: 'POST',
      path: '/excel/upload',
      handler: 'excel.uploadExcel',
      config: {
        policies: [],
        auth: false,
        multipart: true
      }
    }
  ]
}; 