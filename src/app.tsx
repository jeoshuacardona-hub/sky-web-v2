import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

export const initialStateConfig = {
  loading: <div>Cargando...</div>,
};

export default async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  return {
    settings: {},
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
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
    splitMenus: false,
    headerTitleRender: () => {
      return <span style={{color: '#fff', fontSize: '20px', fontWeight: 'bold'}}>Sky Web</span>;
    },
    ...initialState?.settings,
  };
};
