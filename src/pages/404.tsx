import { Result, Button } from 'antd';
import { history } from '@umijs/max';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la página que buscas no existe."
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          Volver al Inicio
        </Button>
      }
    />
  );
}
