import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, DollarOutlined } from '@ant-design/icons';

export default function Dashboard() {
  return (
    <div style={{padding:24}}>
      <h1>Dashboard - Sky Web</h1>
      <Row gutter={16}>
        <Col span={12}><Card><Statistic title="Clientes" value={142} prefix={<UserOutlined/>}/></Card></Col>
        <Col span={12}><Card><Statistic title="Ingresos" value={8450000} prefix={<DollarOutlined/>} formatter={(v:any)=>`$${v.toLocaleString()}`}/></Card></Col>
      </Row>
    </div>
  );
}
