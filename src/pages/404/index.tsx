import { Result, Button } from 'antd';
import { history } from '@umijs/max';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Página no encontrada"
      extra={
        <Button type="primary" onClick={() => history.push('/dashboard')}>
          Volver al Inicio
        </Button>
      }
    />
  );
}
