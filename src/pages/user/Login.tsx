import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  const onFinish = (values: any) => {
    if (values.username === 'admin' && values.password === 'skyweb2024') {
      message.success('¡Bienvenido!');
      window.location.href = '/dashboard';
    } else {
      message.error('Credenciales incorrectas');
    }
  };

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh',background:'#f0f2f5'}}>
      <Card title="Sky Web - Iniciar Sesión" style={{width:400}}>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{required:true,message:'Ingresa usuario'}]}>
            <Input prefix={<UserOutlined/>} placeholder="Usuario: admin"/>
          </Form.Item>
          <Form.Item name="password" rules={[{required:true,message:'Ingresa contraseña'}]}>
            <Input.Password prefix={<LockOutlined/>} placeholder="Contraseña: skyweb2024"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Ingresar</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
