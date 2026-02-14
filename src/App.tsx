import appScreen1 from "figma:asset/2b0bd1795831ea72492a9d4f5b61be303132e851.png";
import appScreen3 from "figma:asset/36b694f179b69db68e228412ca297b91f6fbbae7.png";
import appScreen2 from "figma:asset/ddd511a576576702adf6b63939e3c4852377ee8e.png";
import appScreen1Brasil from "./assets/2b0bd1795831ea72492a9d4f5b61be303132e851_brasil.png";
import appScreen3Brasil from "./assets/36b694f179b69db68e228412ca297b91f6fbbae7_brasil.png";
import appScreen2Brasil from "./assets/ddd511a576576702adf6b63939e3c4852377ee8e_brasil.png";
import logo from "./assets/logo.webp";
import {
  ArrowRight,
  Clock,
  Download,
  Instagram,
  MessageCircle,
  Shield,
  Star,
  Users,
  ChevronDown,
  Check,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const currencies = [
  {
    value: "CLP",
    label: "Pesos Chilenos",
    flagUrl: "https://flagcdn.com/w40/cl.png",
    symbol: "$",
    minAmount: 10000
  },
  {
    value: "COP",
    label: "Pesos Colombianos",
    flagUrl: "https://flagcdn.com/w40/co.png",
    symbol: "$",
    minAmount: 10000
  },
  {
    value: "PEN",
    label: "Soles Peruanos",
    flagUrl: "https://flagcdn.com/w40/pe.png",
    symbol: "S/",
    minAmount: 10
  },
  {
    value: "BRL",
    label: "Reales Brasileños",
    flagUrl: "https://flagcdn.com/w40/br.png",
    symbol: "R$",
    minAmount: 10
  },
  {
    value: "USDT",
    label: "USDT",
    flagUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    symbol: "₮",
    minAmount: 10
  },
];

const getDefaultCurrency = (sourceRegion?: string) => {
  // If source region is explicitly provided, use it
  if (sourceRegion === "chile") {
    return "CLP";
  }
  if (sourceRegion === "brasil") {
    return "BRL";
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Chile timezones
  if (timezone.includes("Santiago") || timezone.includes("Chile")) {
    return "CLP";
  }

  // Colombia timezones
  if (timezone.includes("Bogota") || timezone.includes("Colombia")) {
    return "COP";
  }

  // Peru timezones
  if (timezone.includes("Lima") || timezone.includes("Peru")) {
    return "PEN";
  }

  // Brazil timezones
  if (timezone.includes("Sao_Paulo") || timezone.includes("Brazil") ||
      timezone.includes("Brasilia") || timezone.includes("Manaus") ||
      timezone.includes("Fortaleza") || timezone.includes("Recife")) {
    return "BRL";
  }

  // Default to USDT if not in any of these countries
  return "USDT";
};

export default function App({ sourceRegion }: { sourceRegion?: string } = {}) {
  const [selectedCurrency, setSelectedCurrency] = useState(getDefaultCurrency(sourceRegion));
  const [amount, setAmount] = useState("");

  const isBrasilPage = sourceRegion === "brasil";

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    setAmount("");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value);
  };

  const formatAmount = (value: string) => {
    if (!value) return "";
    return parseInt(value).toLocaleString("es-CL");
  };

  const currentCurrency = currencies.find((c) => c.value === selectedCurrency);
  const numericAmount = amount ? parseInt(amount) : 0;
  const isValidAmount = numericAmount >= (currentCurrency?.minAmount || 0);
  const showError = amount && !isValidAmount;

  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=venecol.express";
  const whatsappUrl = `https://wa.me/56933313118?text=${encodeURIComponent(
    isBrasilPage
      ? "Hola, me gustaría saber cómo enviar dinero desde Brasil a Venezuela"
      : "Hola me gustaría saber como enviar dinero a Venezuela"
  )}`;
  const instagramUrl = "https://www.instagram.com/cambios_venecol/";

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Venecol Express" className="w-10 h-10 rounded-xl" />
              <div>
                <div className="text-[#3D6B85]">Venecol Express</div>
                <div className="text-xs text-gray-500">
                  +7 años de confianza
                </div>
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

      {/* Calculator Section */}
      <section className="bg-gradient-to-br from-[#6B8E9D] to-[#3D6B85] py-12">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full" style={{ maxWidth: '400px' }}>
            <h3 className="text-gray-700 text-sm font-medium mb-4">Tú envías</h3>

            <div className="mb-6">
              <Select.Root value={selectedCurrency} onValueChange={handleCurrencyChange}>
                <Select.Trigger className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3D6B85]/20 cursor-pointer text-base flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={currencies.find((c) => c.value === selectedCurrency)?.flagUrl}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <Select.Value>
                      {currencies.find((c) => c.value === selectedCurrency)?.label}
                    </Select.Value>
                  </div>
                  <Select.Icon>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 min-w-[var(--radix-select-trigger-width)]">
                    <Select.Viewport className="py-3 px-3">
                      {currencies.map((currency) => (
                        <Select.Item
                          key={currency.value}
                          value={currency.value}
                          className="flex items-center justify-between gap-4 px-4 py-4 rounded-lg cursor-pointer hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-[#3D6B85]/15 data-[state=checked]:border data-[state=checked]:border-[#3D6B85]/30 outline-none"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={currency.flagUrl}
                              alt=""
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <Select.ItemText className="text-gray-700 text-base data-[state=checked]:font-semibold data-[state=checked]:text-[#3D6B85]">
                              {currency.label}
                            </Select.ItemText>
                          </div>
                          <Select.ItemIndicator>
                            <Check className="w-6 h-6 text-[#3D6B85] stroke-[3]" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            <h3 className="text-gray-700 text-sm font-medium mb-4">Monto a enviar</h3>

            <div className="mb-8">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                <span className="text-3xl text-gray-500">
                  {currentCurrency?.symbol}
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={formatAmount(amount)}
                  onChange={handleAmountChange}
                  className="flex-1 text-3xl text-gray-700 bg-transparent outline-none focus:outline-none focus:ring-0 focus:border-none border-0 shadow-none"
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                />
              </div>
              {showError && (
                <p className="text-sm mt-2 font-semibold" style={{ color: '#DC2626' }}>
                  Mínimo: {currentCurrency?.symbol} {formatAmount(currentCurrency?.minAmount.toString() || "")}
                </p>
              )}
            </div>

            {isValidAmount && amount ? (
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#3D6B85] text-white py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#2C5166] transition-colors shadow-lg"
              >
                <span className="text-lg">📱</span>
                <span>Calcular envío</span>
              </a>
            ) : (
              <div className="w-full py-4 rounded-full flex items-center justify-center gap-3 cursor-not-allowed shadow-lg" style={{ backgroundColor: '#7A95A3', color: 'white' }}>
                <span className="text-lg">📱</span>
                <span>Calcular envío</span>
              </div>
            )}

            <p className="text-center text-sm text-gray-500 mt-4">
              Calcula tu envío en la app con la tasa del día
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3D6B85] via-[#4A7A96] to-[#3D6B85] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>+15,000 descargas</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl flex items-center gap-4 flex-wrap">
                {isBrasilPage && (
                  <img
                    src="https://flagcdn.com/96x72/br.png"
                    srcSet="https://flagcdn.com/144x108/br.png 1.5x, https://flagcdn.com/192x144/br.png 2x"
                    alt="Brasil"
                    className="w-16 h-12 md:w-20 md:h-15 rounded-lg shadow-lg"
                  />
                )}
                <span>
                  {isBrasilPage ? (
                    <>
                      Envía desde Brasil a Venezuela{" "}
                      <span className="text-yellow-300">HOY mismo</span>
                    </>
                  ) : (
                    <>
                      Envía a Venezuela{" "}
                      <span className="text-yellow-300">HOY mismo</span>
                    </>
                  )}
                </span>
              </h1>

              <p className="text-xl text-white/90">
                {isBrasilPage ? (
                  <>
                    💸 Desde Brasil a Venezuela
                    <br />
                    🔐 +7 años de confianza | Tasas competitivas
                    <br />⚡ Transferencias en minutos con Reales Brasileños (BRL)
                  </>
                ) : (
                  <>
                    💸 Desde Colombia • Chile • Perú • Brasil
                    <br />
                    🔐 +7 años | Tasas competitivas
                    <br />⚡ Transferencias en minutos
                  </>
                )}
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
                  <div className="text-3xl">Todos</div>
                  <div className="text-sm text-white/80">Los días</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 flex justify-center items-center gap-4">
                <div className="transform translate-y-8 hover:translate-y-4 transition-transform">
                  <ImageWithFallback
                    src={isBrasilPage ? appScreen1Brasil : appScreen1}
                    alt="Venecol App - Pantalla principal"
                    className="w-48 md:w-56 phone-mockup-rounded shadow-2xl"
                  />
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <ImageWithFallback
                    src={isBrasilPage ? appScreen2Brasil : appScreen2}
                    alt="Venecol App - Calculadora de envío"
                    className="w-56 md:w-64 phone-mockup-rounded shadow-2xl"
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
            <h2 className="text-3xl md:text-4xl text-[#3D6B85] mb-4 flex items-center justify-center gap-3">
              {isBrasilPage && (
                <img
                  src="https://flagcdn.com/48x36/br.png"
                  alt="Brasil"
                  className="w-12 h-9"
                />
              )}
              <span>
                {isBrasilPage
                  ? "¿Por qué enviar desde Brasil con Venecol Express?"
                  : "¿Por qué elegir Venecol Express?"}
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              {isBrasilPage
                ? "La mejor opción para enviar Reales Brasileños desde Brasil a Venezuela de forma rápida y segura"
                : "La mejor opción para enviar dinero a Venezuela de forma rápida y segura"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Envíos en Minutos</h3>
              <p className="text-gray-600">
                {isBrasilPage
                  ? "Tus transferencias desde Brasil llegan en cuestión de minutos. Sin esperas, sin complicaciones."
                  : "Tus transferencias llegan en cuestión de minutos. Sin esperas, sin complicaciones."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Seguridad Garantizada</h3>
              <p className="text-gray-600">
                {isBrasilPage
                  ? "Más de 7 años enviando dinero desde Brasil a Venezuela. Tu dinero está en buenas manos."
                  : "Más de 7 años brindando un servicio confiable. Tu dinero está en buenas manos."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3D6B85]/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#3D6B85]" />
              </div>
              <h3 className="text-xl text-[#3D6B85] mb-3">Miles Confían en Nosotros</h3>
              <p className="text-gray-600">
                {isBrasilPage
                  ? "Venezolanos en Brasil ya usan Venecol Express para enviar dinero a sus familias con Reales."
                  : "Más de 15,000 personas ya usan Venecol Express para enviar dinero a sus familias."}
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
                  src={isBrasilPage ? appScreen1Brasil : appScreen1}
                  alt="Venecol App - Vista de inicio"
                  className="w-48 phone-mockup-rounded shadow-xl"
                />
                <ImageWithFallback
                  src={isBrasilPage ? appScreen3Brasil : appScreen3}
                  alt="Venecol App - Confirmación de pago"
                  className="w-48 phone-mockup-rounded shadow-xl"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl text-[#3D6B85] flex items-center gap-3">
                {isBrasilPage && (
                  <img
                    src="https://flagcdn.com/48x36/br.png"
                    srcSet="https://flagcdn.com/72x54/br.png 1.5x, https://flagcdn.com/96x72/br.png 2x"
                    alt="Brasil"
                    className="w-10 h-8 md:w-12 md:h-9 rounded shadow-md"
                  />
                )}
                <span>
                  {isBrasilPage
                    ? "Envía Reales desde Brasil fácil y rápido"
                    : "Fácil, rápido y seguro desde tu celular"}
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                {isBrasilPage
                  ? "Calcula la tasa del día, envía tus Reales Brasileños a Venezuela y recibe confirmación inmediata. Todo desde la app."
                  : "Calcula la tasa del día, envía dinero y recibe confirmación inmediata. Todo desde la app."}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {isBrasilPage
                      ? "Consulta la tasa de cambio BRL/VES actualizada en tiempo real"
                      : "Consulta la tasa de cambio actualizada en tiempo real"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    {isBrasilPage
                      ? "🇧🇷 Envía desde Brasil a Venezuela con Reales Brasileños (BRL)"
                      : "Envía desde Colombia, Chile, Perú o Brasil a Venezuela"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Recibe comprobante de cada transacción realizada
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#3D6B85] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Historial completo de todos tus envíos
                  </span>
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#3D6B85] mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-gray-600">
              Opiniones reales de la Play Store
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "EXELENTE aplicación muy Buena la recomiendo, la mejor que he
                visto en el mundo una manera sencilla de enviar dinero a tus
                seres queridos, súper rápida, segura, confiable."
              </p>
              <div className="text-sm text-gray-500">- Yamerlin Angu</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excelente app después de describirla me quedé con ella, son
                100% confiables y realizan la transferencia en cuestión de
                minutos, súper rápido y es muy sencillo utilizar la app."
              </p>
              <div className="text-sm text-gray-500">- Karelis Franco</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Buen día la aplicación es excelente, eficiente, buena, rápida y
                confiable..."
              </p>
              <div className="text-sm text-gray-500">- Edwin Palencia</div>
            </div>
          </div>

          <div className="text-center m-20">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#3D6B85] hover:text-[#2C5166] transition-colors"
            >
              <span>Ver más opiniones en Play Store</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3D6B85] to-[#2C5166] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl">Únete a nuestra comunidad</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Síguenos en redes sociales para conocer promociones, tasas del día
              y novedades. Estamos aquí para ayudarte.
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
              <p className="text-white/80">@cambios_venecol</p>
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
            Descarga la app, crea tu cuenta y realiza tu primera transferencia
            en minutos
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
              src={isBrasilPage ? appScreen2Brasil : appScreen2}
              alt="Venecol Express App"
              className="w-64 mx-auto phone-mockup-rounded shadow-2xl"
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
                Más de 7 años facilitando envíos de dinero a Venezuela con las
                mejores tasas del mercado.
              </p>
            </div>

            <div>
              <div className="text-xl mb-4">Enlaces</div>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Descargar App
                  </a>
                </li>
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
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
                <li>Disponible todos los días</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2025 Venecol Express. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
