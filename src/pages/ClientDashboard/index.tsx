import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, DollarOutlined, MessageOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function ClientDashboard() {
  return (
    <PageContainer title="Área de Cliente - Sky Web">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title="Clientes Atendidos" value={142} prefix={<UserOutlined />} valueStyle={{color:'#3f8600'}}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title="Dinero Generado" value={8450000} prefix={<DollarOutlined />} formatter={(v:any)=>`$${v.toLocaleString()}`} valueStyle={{color:'#1890ff'}}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title="Mensajes WhatsApp" value={1240} prefix={<MessageOutlined />}/></Card></Col>
        <Col xs={24} sm={12} lg={6}><Card><Statistic title="Comprobantes Verificados" value={38} prefix={<CheckCircleOutlined />} valueStyle={{color:'#52c41a'}}/></Card></Col>
      </Row>
    </PageContainer>
  );
}
