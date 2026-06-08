import { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Table, Tag, Spin, Alert } from 'antd';
import { UserOutlined, DollarOutlined, DisconnectOutlined, CheckCircleOutlined, MessageOutlined, RiseOutlined } from '@ant-design/icons';
import { fetchClientMetrics, type ClientMetrics } from '@/services/clientApi';

export default function ClientDashboard() {
  const [metrics, setMetrics] = useState<ClientMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { fetchClientMetrics().then(setMetrics).finally(() => setLoading(false)); }, []);
  if (loading) return <div style={{textAlign:'center',padding:80}}><Spin size="large"/></div>;
  const columns = [
    { title: 'Concepto', dataIndex: 'name', key: 'name' },
    { title: 'Cantidad', dataIndex: 'value', key: 'value' },
    { title: 'Estado', dataIndex: 'status', key: 'status', render: (s:string) => <Tag color={s==='Verificado'?'green':s==='Pendiente'?'orange':'default'}>{s}</Tag> },
    { title: 'Fecha', dataIndex: 'date', key: 'date' },
  ];
  const recentData = [
    { key:'1', name:'Pago Suscripción Mensual', value:'$120.000', status:'Verificado', date:'Hoy' },
    { key:'2', name:'Bot Configurado', value:'Activo', status:'Verificado', date:'Ayer' },
    { key:'3', name:'Reembolso Parcial', value:'$45.000', status:'Pendiente', date:'3 días' },
  ];
  return (
    <div style={{padding:24,background:'#f5f7fa',minHeight:'100vh'}}>
      <h1 style={{fontSize:24,fontWeight:700,marginBottom:24}}>👋 Área de Cliente - Sky Web</h1>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Clientes Atendidos" value={metrics!.clientesAtendidos} prefix={<UserOutlined/>}/></Card></Col>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Dinero Generado" value={metrics!.dineroGenerado} prefix={<DollarOutlined/>} valueStyle={{color:'#3f8600'}} formatter={(v:any)=>`$${Number(v).toLocaleString()}`}/></Card></Col>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Clientes Abandonados" value={metrics!.clientesAbandonados} prefix={<DisconnectOutlined/>} valueStyle={{color:'#cf1322'}}/></Card></Col>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Comprobantes Verificados" value={metrics!.comprobantesVerificados} prefix={<CheckCircleOutlined/>}/></Card></Col>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Mensajes WhatsApp" value={metrics!.mensajesWhatsApp} prefix={<MessageOutlined/>}/></Card></Col>
        <Col xs={24} sm={12} md={8}><Card><Statistic title="Tasa de Conversión" value={metrics!.tasaConversion} suffix="%" prefix={<RiseOutlined/>} valueStyle={{color:'#1890ff'}}/></Card></Col>
      </Row>
      <Card title="📄 Actividad Reciente & Pagos" style={{marginTop:24}}><Table columns={columns} dataSource={recentData} pagination={false}/></Card>
      <Alert message="ℹ️ Datos actualizados" description={`Última sincronización: ${new Date(metrics!.lastUpdated).toLocaleString()}`} type="info" showIcon style={{marginTop:24}}/>
    </div>
  );
}
