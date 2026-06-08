import antd from \"antd/es/locale/es_ES\";
const esES = {
  \"navBar.lang\": \"Idiomas\",
  \"app.title\": \"Sky Web\",
  \"app.menu.dashboard\": \"Dashboard\",
  \"app.menu.client\": \"Área Cliente\",
  \"app.login.login\": \"Iniciar Sesión\",
  \"app.login.username\": \"Usuario\",
  \"app.login.password\": \"Contraseña\",
  \"app.login.submit\": \"Entrar\",
};
export default { ...antd, ...esES };
ENDLOCALE

# 2. Actualizar configuración
cat > config/defaultSettings.ts << \"ENDSETTINGS\"
import { ProLayoutProps } from \"@ant-design/pro-components\";
const Settings: ProLayoutProps = {
  navTheme: \"light\",
  colorPrimary: \"#1890ff\",
  layout: \"side\",
  contentWidth: \"Fluid\",
  fixedHeader: true,
  fixSiderbar: true,
  title: \"Sky Web\",
  pwa: true,
  logo: \"/logo.svg\",
};
export default Settings;
ENDSETTINGS

# 3. Crear logo Sky Web
cat > public/logo.svg << \"ENDLOGO\"
<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 50\">
  <defs><linearGradient id=\"g\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">
    <stop offset=\"0%\" style=\"stop-color:#1890ff\"/><stop offset=\"100%\" style=\"stop-color:#696cff\"/>
  </linearGradient></defs>
  <circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"url(#g)\"/>
  <path d=\"M15 25 L22 32 L35 18\" stroke=\"white\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>
  <text x=\"55\" y=\"32\" font-family=\"Arial\" font-size=\"24\" font-weight=\"bold\" fill=\"#1890ff\">Sky Web</text>
</svg>
ENDLOGO

# 4. Rutas en español
cat > config/routes.ts << \"ENDROUTES\"
export default [
  { path: \"/user\", layout: false, routes: [{ name: \"login\", path: \"/user/login\", component: \"./user/login\" }] },
  { name: \"dashboard\", icon: \"DashboardOutlined\", path: \"/dashboard\", component: \"./Dashboard\" },
  { name: \"area-cliente\", icon: \"UserOutlined\", path: \"/client-dashboard\", component: \"./ClientDashboard\" },
  { path: \"/\", redirect: \"/dashboard\" },
  { component: \"./404\" },
] as import(\"@umijs/max\").RouteConfig[];
ENDROUTES

echo \"✅ Archivos de localización creados\"
