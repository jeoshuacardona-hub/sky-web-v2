import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, DollarOutlined, MessageOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard - Sky Web">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Clientes Atendidos"
              value={142}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Dinero Generado"
              value={8450000}
              prefix={<DollarOutlined />}
              formatter={(value) => `$${value.toLocaleString()}`}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Mensajes WhatsApp"
              value={1240}
              prefix={<MessageOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Comprobantes Verificados"
              value={38}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>
      
      <Card title="Bienvenido a Sky Web" style={{ marginTop: 24 }}>
        <p>Sistema de gestión comercial para tus bots de WhatsApp.</p>
        <p>Selecciona una opción del menú para comenzar.</p>
      </Card>
    </PageContainer>
  );
}
