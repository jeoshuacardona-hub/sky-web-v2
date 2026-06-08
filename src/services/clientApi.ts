export interface ClientMetrics {
  clientesAtendidos: number;
  dineroGenerado: number;
  clientesAbandonados: number;
  comprobantesVerificados: number;
  mensajesWhatsApp: number;
  tasaConversion: number;
  lastUpdated: string;
}

// 🔧 URL de tu n8n local (ya expuesto con ngrok)
const N8N_WEBHOOK = 'https://savings-estimator-activator.ngrok-free.dev';

export async function fetchClientMetrics(): Promise<ClientMetrics> {
  try {
    // Intenta conectar con tu n8n existente
    const res = await fetch(`${N8N_WEBHOOK}/webhook/skyweb-metrics`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    });
    
    if (res.ok) {
      const data = await res.json();
      // Si tu n8n devuelve los datos, los usa
      return {
        clientesAtendidos: data.clientesAtendidos || 0,
        dineroGenerado: data.dineroGenerado || 0,
        clientesAbandonados: data.clientesAbandonados || 0,
        comprobantesVerificados: data.comprobantesVerificados || 0,
        mensajesWhatsApp: data.mensajesWhatsApp || 0,
        tasaConversion: data.tasaConversion || 0,
        lastUpdated: data.lastUpdated || new Date().toISOString()
      };
    }
  } catch (error) {
    console.log('⚠️ n8n no responde, usando datos de ejemplo');
  }
  
  // 🟡 DATOS DE EJEMPLO (se muestran si n8n no está configurado para este endpoint)
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
