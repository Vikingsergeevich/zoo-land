import { Puzzle } from '@strapi/icons';

export default {
  config: {
    locales: ['ru'],
  },
  bootstrap(app: any) {
    app.addMenuLink({
      to: '/plugins/excel',
      icon: Puzzle,
      intlLabel: {
        id: 'excel.plugin.name',
        defaultMessage: 'Excel Import',
      },
      Component: async () => {
        const component = await import('./pages/ImportPage');
        return component.default;
      },
      permissions: [],
    });
  },
}; 