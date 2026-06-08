export interface ClientMetrics {
  clientesAtendidos: number;
  dineroGenerado: number;
  clientesAbandonados: number;
  comprobantesVerificados: number;
  mensajesWhatsApp: number;
  tasaConversion: number;
  lastUpdated: string;
}

const N8N_BASE_URL = 'https://savings-estimator-activator.ngrok-free.dev';

export async function fetchClientMetrics(): Promise<ClientMetrics> {
  try {
    const res = await fetch(`${N8N_BASE_URL}/webhook/skyweb-metrics`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    });
    if (!res.ok) throw new Error('Error ' + res.status);
    return await res.json();
  } catch (error) {
    console.warn('⚠️ Usando datos de prueba (n8n no responde):', error);
    // Fallback a mock data si n8n no está disponible
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
}
