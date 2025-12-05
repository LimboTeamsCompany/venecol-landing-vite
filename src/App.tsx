import { Download, MessageCircle, Instagram, Clock, Shield, Users, ArrowRight, Star } from 'lucide-react';
import appScreen1 from 'figma:asset/2b0bd1795831ea72492a9d4f5b61be303132e851.png';
import appScreen2 from 'figma:asset/ddd511a576576702adf6b63939e3c4852377ee8e.png';
import appScreen3 from 'figma:asset/36b694f179b69db68e228412ca297b91f6fbbae7.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=venecol.express';
  const whatsappUrl = `https://wa.me/56933313118?text=${encodeURIComponent('Hola me gustaría saber como enviar dinero a Venezuela')}`;
  const instagramUrl = 'https://www.instagram.com/cambios_venecol/';

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3D6B85] to-[#2C5166] rounded-xl flex items-center justify-center">
                <span className="text-white">V</span>
              </div>
              <div>
                <div className="text-[#3D6B85]">Venecol Express</div>
                <div className="text-xs text-gray-500">+7 años de confianza</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3D6B85] transition-colors flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3D6B85] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactar</span>
              </a>
              <a 
                href={playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#3D6B85] text-white px-6 py-2 rounded-full hover:bg-[#2C5166] transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar App
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3D6B85] via-[#4A7A96] to-[#3D6B85] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>+15,000 descargas</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Envía a Venezuela <span className="text-yellow-300">HOY mismo</span>
              </h1>
              
              <p className="text-xl text-white/90">
                💸 Desde Colombia • Chile • Perú<br/>
                🔐 +7 años | Tasas competitivas<br/>
                ⚡ Transferencias en minutos
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#3D6B85] px-8 py-4 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Download className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Descarga desde</div>
                    <div>Google Play Store</div>
                  </div>
                </a>
                
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  Consultar por WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl">15K+</div>
                  <div className="text-sm text-white/80">Descargas</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl">7+</div>
                  <div className="text-sm text-white/80">Años</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl">24/7</div>
                  <div className="text-sm text-white/80">Soporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 flex justify-center items-center gap-4">
                <div className="transform translate-y-8 hover:translate-y-4 transition-transform">
                  <ImageWithFallback 
                    src={appScreen1} 
                    alt="Venecol App - Pantalla principal"
                    className="w-48 md:w-56 rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <ImageWithFallback 
                    src={appScreen2} 
                    alt="Venecol App - Calculadora de envío"
                    className="w-56 md:w-64 rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#3D6B85] mb-4">
              ¿Por qué elegir Venecol Express?
            </h2>
            <p className="text-xl text-gray-600">
              La mejor opción para enviar dinero a Venezuela de forma rápida y segura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Envíos en Minutos</h3>
              <p className="text-gray-600">
                Tus transferencias llegan en cuestión de minutos. Sin esperas, sin complicaciones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-600">
                Más de 7 años brindando un servicio confiable. Tu dinero está en buenas manos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Miles Confían en Nosotros</h3>
              <p className="text-gray-600">
                Más de 15,000 personas ya usan Venecol Express para enviar dinero a sus familias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex gap-4 justify-center">
                <ImageWithFallback 
                  src={appScreen1} 
                  alt="Venecol App - Vista de inicio"
                  className="w-48 rounded-2xl shadow-xl"
                />
                <ImageWithFallback 
                  src={appScreen3} 
                  alt="Venecol App - Confirmación de pago"
                  className="w-48 rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl text-[#3D6B85]">
                Fácil, rápido y seguro desde tu celular
              </h2>
              <p className="text-xl text-gray-600">
                Calcula la tasa del día, envía dinero y recibe confirmación inmediata. Todo desde la app.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Consulta la tasa de cambio actualizada en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Envía desde Colombia, Chile o Perú a Venezuela</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Recibe comprobante de cada transacción realizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Historial completo de todos tus envíos</span>
                </li>
              </ul>
              <a 
                href={playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#3D6B85] text-white px-8 py-4 rounded-full hover:bg-[#2C5166] transition-all shadow-lg"
              >
                <Download className="w-5 h-5" />
                Descargar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3D6B85] to-[#2C5166] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl">
              Únete a nuestra comunidad
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Síguenos en redes sociales para conocer promociones, tasas del día y novedades. Estamos aquí para ayudarte.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center"
              >
                <Instagram className="w-6 h-6" />
                Síguenos en Instagram
              </a>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all flex items-center gap-3 shadow-xl w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                ¿Tienes preguntas?
              </a>
            </div>

            <div className="pt-8">
              <p className="text-white/80">
                @cambios_venecol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl text-[#3D6B85]">
            Comienza a enviar dinero hoy mismo
          </h2>
          <p className="text-xl text-gray-600">
            Descarga la app, crea tu cuenta y realiza tu primera transferencia en minutos
          </p>
          
          <a 
            href={playStoreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#3D6B85] text-white px-10 py-5 rounded-full hover:bg-[#2C5166] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Download className="w-6 h-6" />
            <div className="text-left">
              <div className="text-sm text-white/90">Descarga gratis desde</div>
              <div className="text-xl">Google Play Store</div>
            </div>
          </a>

          <div className="pt-8">
            <ImageWithFallback 
              src={appScreen2} 
              alt="Venecol Express App"
              className="w-64 mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D6B85] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl mb-4">Venecol Express</div>
              <p className="text-white/80">
                Más de 7 años facilitando envíos de dinero a Venezuela con las mejores tasas del mercado.
              </p>
            </div>
            
            <div>
              <div className="text-xl mb-4">Enlaces</div>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Descargar App
                  </a>
                </li>
                <li>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="text-xl mb-4">Contacto</div>
              <ul className="space-y-2 text-white/80">
                <li>WhatsApp: +56 9 3331 3118</li>
                <li>Instagram: @cambios_venecol</li>
                <li>Servicio disponible 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2025 Venecol Express. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
