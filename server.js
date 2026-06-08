const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/api/metrics', async (req, res) => {
  // Datos de ejemplo (luego conectas a Supabase)
  res.json({
    clientesAtendidos: 142,
    dineroGenerado: 8450000,
    clientesAbandonados: 12,
    comprobantesVerificados: 38,
    mensajesWhatsApp: 1240,
    tasaConversion: 24.5,
    lastUpdated: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
