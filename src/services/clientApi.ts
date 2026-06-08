export interface ClientMetrics {
  clientesAtendidos: number;
  dineroGenerado: number;
  clientesAbandonados: number;
  comprobantesVerificados: number;
  mensajesWhatsApp: number;
  tasaConversion: number;
  lastUpdated: string;
}

// 🔧 Tus credenciales de Supabase (las mismas que usa tu n8n)
const SUPABASE_URL = 'https://rxihcwtvbdequxvkqvqd.supabase.co';
const SUPABASE_KEY = ''; // ← PEGA TU KEY DE SUPABASE AQUÍ (la misma de n8n)

export async function fetchClientMetrics(): Promise<ClientMetrics> {
  try {
    // Consulta directa a tus tablas de Supabase (sin modificar n8n)
    const headers = {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json'
    };

    const [pedidosRes, chatsRes, clientesRes, configRes] = await Promise.all([
      // 💰 Dinero generado: suma de pedidos
      fetch(`${SUPABASE_URL}/rest/v1/pedidos?select=total`, { headers }).then(r => r.json()).catch(() => []),
      // 💬 Mensajes WhatsApp: count de chats
      fetch(`${SUPABASE_URL}/rest/v1/chats?select=id`, { headers }).then(r => r.json()).catch(() => []),
      // 👥 Clientes atendidos: únicos con pedidos
      fetch(`${SUPABASE_URL}/rest/v1/clientes?select=telegram_id,total_pedidos`, { headers }).then(r => r.json()).catch(() => []),
      // ⚙️ Config: para verificar estado
      fetch(`${SUPABASE_URL}/rest/v1/config_sistema?id=eq.1&select=tienda_abierta`, { headers }).then(r => r.json()).catch(() => [])
    ]);

    const dineroGenerado = pedidosRes?.reduce((sum: number, p: any) => sum + (Number(p.total) || 0), 0) || 0;
    const mensajesWhatsApp = chatsRes?.length || 0;
    const clientesAtendidos = clientesRes?.filter((c: any) => (c.total_pedidos || 0) > 0).length || 0;
    const clientesTotales = clientesRes?.length || 0;
    const clientesAbandonados = Math.max(0, clientesTotales - clientesAtendidos);
    const comprobantesVerificados = pedidosRes?.filter((p: any) => p.pago === 'verificado' || p.estado === 'completado').length || 0;
    const tasaConversion = clientesTotales > 0 ? Math.round((clientesAtendidos / clientesTotales) * 100) : 0;

    return {
      clientesAtendidos,
      dineroGenerado,
      clientesAbandonados,
      comprobantesVerificados,
      mensajesWhatsApp,
      tasaConversion,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.warn('⚠️ Error consultando Supabase, usando datos de ejemplo:', error);
  }

  // 🟡 DATOS DE EJEMPLO (fallback si no hay conexión)
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
