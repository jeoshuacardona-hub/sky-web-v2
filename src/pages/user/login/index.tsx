import { LoginForm, ProFormText, ProFormCheckbox } from \"@ant-design/pro-components\";
import { Helmet, history } from \"@umijs/max\";
import { message } from \"antd\";

export default function LoginPage() {
  const handleSubmit = async (values: any) => {
    if (values.username === \"admin\" && values.password === \"skyweb2024\") {
      message.success(\"¡Bienvenido a Sky Web!\");
      setTimeout(() => history?.push(\"/dashboard\"), 100);
    } else {
      message.error(\"Usuario o contraseña incorrectos\");
    }
  };
  return (
    <div style={{display:\"flex\",flexDirection:\"column\",height:\"100vh\",background:\"#f0f2f5\",alignItems:\"center\",justifyContent:\"center\"}}>
      <Helmet><title>Iniciar Sesión - Sky Web</title></Helmet>
      <LoginForm
        logo={<img alt=\"logo\" src=\"/logo.svg\" style={{height:40}}/>}
        title=\"Sky Web\"
        subTitle=\"Sistema de Gestión Comercial\"
        onFinish={handleSubmit}
      >
        <ProFormText name=\"username\" placeholder=\"Usuario: admin\" rules={[{required:true,message:\"Ingresa tu usuario\"}]} fieldProps={{size:\"large\",prefix:<span>👤</span>}}/>
        <ProFormText.Password name=\"password\" placeholder=\"Contraseña: skyweb2024\" rules={[{required:true,message:\"Ingresa tu contraseña\"}]} fieldProps={{size:\"large\",prefix:<span>🔒</span>}}/>
        <ProFormCheckbox name=\"autoLogin\">Recordarme</ProFormCheckbox>
      </LoginForm>
    </div>
  );
}
ENDLOGIN

# Dashboard en español
cat > src/pages/Dashboard/index.tsx << \"ENDDASH\"
import { PageContainer } from \"@ant-design/pro-components\";
import { Card, Row, Col, Statistic } from \"antd\";
import { UserOutlined, DollarOutlined, MessageOutlined, CheckCircleOutlined } from \"@ant-design/icons\";

export default function Dashboard() {
  return (
    <PageContainer title=\"Dashboard - Sky Web\">
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title=\"Clientes Atendidos\" value={142} prefix={<UserOutlined/>} valueStyle={{color:\"#3f8600\"}}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title=\"Dinero Generado\" value={8450000} prefix={<DollarOutlined/>} formatter={(v:any)=>\`$\${v.toLocaleString()}\`} valueStyle={{color:\"#1890ff\"}}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title=\"Mensajes WhatsApp\" value={1240} prefix={<MessageOutlined/>}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title=\"Comprobantes Verificados\" value={38} prefix={<CheckCircleOutlined/>} valueStyle={{color:\"#52c41a\"}}/></Card></Col>
      </Row>
      <Card title=\"Bienvenido a Sky Web\" style={{marginTop:24}}>
        <p>Sistema de gestión comercial para tus bots de WhatsApp.</p>
        <p>Selecciona una opción del menú para comenzar.</p>
      </Card>
    </PageContainer>
  );
}
ENDDASH

echo \"✅ Componentes creados\"
