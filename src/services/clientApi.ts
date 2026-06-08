export interface ClientMetrics {
  clientesAtendidos: number;
  dineroGenerado: number;
  clientesAbandonados: number;
  comprobantesVerificados: number;
  mensajesWhatsApp: number;
  tasaConversion: number;
  lastUpdated: string;
}

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || '';

export async function fetchClientMetrics(): Promise<ClientMetrics> {
  // MOCK DATA - Funciona YA sin n8n
  await new Promise((res) => setTimeout(res, 600));
  return {
    clientesAtendidos: 142,
    dineroGenerado: 8450000,
    clientesAbandonados: 12,
    comprobantesVerificados: 38,
    mensajesWhatsApp: 1240,
    tasaConversion: 24.5,
    lastUpdated: new Date().toISOString(),
  };
  /*
  // DESCOMENTAR cuando n8n sea público:
  if (!N8N_WEBHOOK_URL) throw new Error('N8N_WEBHOOK_URL no configurada');
  const res = await fetch(N8N_WEBHOOK_URL);
  if (!res.ok) throw new Error('Error al conectar con n8n');
  return res.json();
  */
}
