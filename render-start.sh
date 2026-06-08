#!/bin/bash
# Si existe build, servirlo. Si no, construir primero.
if [ ! -d "dist" ]; then
  echo "🔨 Building production bundle..."
  npm run build
fi
echo "🚀 Serving on port $PORT"
npx serve -s dist -l $PORT
