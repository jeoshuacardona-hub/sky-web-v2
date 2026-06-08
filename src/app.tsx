import type { RunTimeLayoutConfig } from '@umijs/max';

export const layout: RunTimeLayoutConfig = () => {
  return {
    title: 'Sky Web',
    logo: '/logo.svg',
    menu: {
      locale: false,
    },
    layout: 'side',
    theme: 'light',
    fixedHeader: true,
    fixSiderbar: true,
    contentWidth: 'Fluid',
  };
};
