# Venecol Landing - Guía de Contexto

## Stack
- **Framework**: Vite + React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router DOM
- **Analytics**: Vercel Analytics + Speed Insights
- **Deploy**: Vercel (auto-deploy desde git)

## Estructura Principal
- `src/App.tsx` - Componente principal de la landing (todo en un solo archivo)
- `src/main.tsx` - Router con 3 rutas:
  - `/` - Landing principal
  - `/sur` - Landing con moneda default CLP (Chile)
  - `/brasil` - Landing 100% enfocada en Brasil (BRL default, textos personalizados)

## Funcionalidades Clave

### Calculadora de Envío
- Selector de monedas: CLP, COP, PEN, BRL, USDT
- Detección automática de moneda por timezone del usuario
- Montos mínimos por moneda
- Validación en tiempo real
- Botón activo solo si monto es válido

### Secciones de la Landing
1. **Header** - Logo, navegación, botón descargar app
2. **Calculadora** - Card flotante con selector de moneda y monto
3. **Hero** - Título, badges, screenshots de la app
4. **Features** - 3 cards con beneficios
5. **App Showcase** - Screenshots y lista de features
6. **Testimonials** - Reviews de Play Store
7. **Social Proof** - CTA para redes sociales
8. **Final CTA** - Botón de descarga principal
9. **Footer** - Links y contacto

### Enlaces Importantes
- Play Store: `https://play.google.com/store/apps/details?id=venecol.express`
- WhatsApp: `+56933313118`
- Instagram: `@cambios_venecol`

## Notas Importantes
- **NO SUBIR A GIT** - Solo el owner sube cambios
- Los cambios se despliegan automáticamente a Vercel
- Assets de Figma importados como `figma:asset/...`
- Color principal: `#3D6B85`
- Todo es responsive (mobile-first)

## Landing Brasil (`/brasil`)
- Todo en **español** (público objetivo: venezolanos en Brasil)
- Moneda default: **BRL (Reales Brasileños)**
- Textos personalizados con énfasis 100% Brasil:
  - Hero: "🇧🇷 Envía desde Brasil a Venezuela HOY mismo"
  - Features: Menciona Brasil repetidamente
  - WhatsApp: Mensaje específico para Brasil
  - Banderas 🇧🇷 en múltiples secciones
- Variable `isBrasilPage` controla todos los condicionales

## Para Editar
- Textos, precios, monedas → `App.tsx`
- Rutas nuevas → `main.tsx`
- Estilos globales → `index.css`
