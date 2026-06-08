import { LoginForm, ProFormText, ProFormCheckbox } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import React, { useState } from 'react';
import { message } from 'antd';

export default function LoginPage() {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // Login simulado - reemplazar con tu API real
      if (values.username === 'admin' && values.password === 'skyweb2024') {
        message.success('¡Bienvenido a Sky Web!');
        const defaultLoginSuccessMessage = '¡Inicio de sesión exitoso!';
        if (history) {
          setTimeout(() => {
            history.push('/dashboard');
          }, 100);
        }
        return;
      } else {
        message.error('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      const defaultLoginFailureMessage = 'Error al iniciar sesión';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>Iniciar Sesión - Sky Web</title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="Sky Web"
          subTitle="Sistema de Gestión Comercial"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <span>👤</span>,
            }}
            placeholder="Usuario: admin"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu usuario',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <span>🔒</span>,
            }}
            placeholder="Contraseña: skyweb2024"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu contraseña',
              },
            ]}
          />
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              Recordarme
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
}
