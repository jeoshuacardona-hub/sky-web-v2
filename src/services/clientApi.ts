export interface ClientMetrics {
  clientesAtendidos: number;
  dineroGenerado: number;
  clientesAbandonados: number;
  comprobantesVerificados: number;
  mensajesWhatsApp: number;
  tasaConversion: number;
  lastUpdated: string;
}

export async function fetchClientMetrics(): Promise<ClientMetrics> {
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
}
