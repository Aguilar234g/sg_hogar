/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_DyENqBEe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_HUxhTSDs.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
    },
    {
      name: "Instagram",
      url: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"></path><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"></path></svg>`
    }
  ];
  return renderTemplate`<!-- Encabezado fijo con fondo semi-transparente -->${maybeRenderHead()}<header class="fixed w-full bg-white/95 backdrop-blur-sm z-50" data-astro-cid-3ef6ksr2> <!-- Gradiente decorativo superior --> <div class="absolute inset-x-0 -top-2 h-2 bg-gradient-to-r from-black/5 via-black/10 to-black/5" data-astro-cid-3ef6ksr2></div> <nav class="container mx-auto px-4" data-astro-cid-3ef6ksr2> <div class="flex justify-between items-center h-20 sm:h-24" data-astro-cid-3ef6ksr2> <!-- Logo con animación de transición --> <a href="#inicio" id="header-logo" class="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out transform-gpu py-2" data-astro-cid-3ef6ksr2> <img src="https://cdn.shopify.com/s/files/1/0843/1488/2375/files/sg_hogar_marca.png?v=1732020859" alt="SG HOGAR Logo" class="h-14 sm:h-16 object-contain transition-all duration-500 ease-in-out" data-astro-cid-3ef6ksr2> </a> <!-- Redes sociales --> <div class="flex items-center space-x-4 ml-auto" data-astro-cid-3ef6ksr2> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} class="text-gray-600 hover:text-black transition-colors duration-300"${addAttribute(social.name, "aria-label")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(social.icon)}` })} </a>`)} </div> </div> </nav> <!-- Línea decorativa inferior --> <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" data-astro-cid-3ef6ksr2></div> </header>  `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const carouselImages = [
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/IMANI_924_2.jpg?v=1727254119",
      alt: "IMANI-924-2"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/IMANI_924_5.jpg?v=1727254148",
      alt: "IMANI-924-5"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/FLAVIA_924_-1_HIGH_en_tamano_grande_c72a9e3f-b8d6-4c6e-9a2a-dd54a6ecf075.jpg?v=1727253843",
      alt: "FLAVIA-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/AURISTELA_924-1_HIGH.jpg?v=1727937770",
      alt: "AURISTELA-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/GIOVANNA_924_1_HIGH.jpg?v=1727938601",
      alt: "GIOVANNA-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/LIA_924_-1_HIGH.jpg?v=1727941429",
      alt: "LIA-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/NYDIA_BEIGE_924-1_HIGH.jpg?v=1727947152",
      alt: "NYDIA-BEIGE-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/TEVI_924-1_HIGH.jpg?v=1727947631",
      alt: "TEVI-924-1"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/BORA624-2.jpg?v=1729689369",
      alt: "BORA-624-2"
    },
    {
      url: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/IBBIE624-1MHIGH.jpg?v=1729751771",
      alt: "IBBIE-624-1"
    }
  ];
  const stats = [
    { number: "19+", label: "A\xF1os de Experiencia" },
    { number: "10+", label: "Calidades de Textil" },
    { number: "700K+", label: "Metros de Tela al A\xF1o" },
    { number: "200k+", label: "Metros Estampados" },
    { number: "200k+", label: "Metros Jacquard" },
    { number: "KM0", label: "Producci\xF3n Propia" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0" data-astro-cid-bbe6dxrz> <!-- Carrusel de imágenes --> <div class="carousel absolute inset-0 w-full h-full" data-astro-cid-bbe6dxrz> ${carouselImages.map((image, index) => renderTemplate`<div${addAttribute(`carousel-slide absolute inset-0 transition-opacity duration-1000 ${index === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(index, "data-index")} data-astro-cid-bbe6dxrz> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover"${addAttribute(index === 0 ? "eager" : "lazy", "loading")} data-astro-cid-bbe6dxrz> </div>`)} </div> <!-- Controles del carrusel --> <div class="absolute inset-x-0 bottom-20 z-30 flex justify-center space-x-3" data-astro-cid-bbe6dxrz> ${carouselImages.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"${addAttribute(index, "data-index")}${addAttribute(`Ir a imagen ${index + 1}`, "aria-label")} data-astro-cid-bbe6dxrz></button>`)} </div> <!-- Botones de navegación --> <button class="carousel-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300" aria-label="Imagen anterior" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-bbe6dxrz></path> </svg> </button> <button class="carousel-next absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300" aria-label="Imagen siguiente" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-bbe6dxrz></path> </svg> </button> <!-- Overlay con gradiente --> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" data-astro-cid-bbe6dxrz></div> <!-- Contenido principal --> <div class="container mx-auto px-4 relative z-20 py-12 sm:py-0" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-6xl mx-auto mt-48 sm:mt-52" data-astro-cid-bbe6dxrz> <!-- Subtítulo dinámico --> <div class="h-12 sm:h-16 md:h-20 overflow-hidden" data-aos="fade-up" data-aos-delay="200" data-astro-cid-bbe6dxrz> <p id="dynamic-text" class="hero-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-center" data-astro-cid-bbe6dxrz></p> </div> <!-- Descripción principal --> <p class="hero-text max-w-2xl text-base sm:text-lg md:text-xl text-center px-4" data-aos="fade-up" data-aos-delay="400" data-astro-cid-bbe6dxrz>
Transformamos la industria textil con tecnología de vanguardia y artesanía tradicional. 
        Creamos soluciones únicas que definen el futuro del diseño textil.
</p> <!-- Estadísticas --> <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8 px-4" data-aos="fade-up" data-aos-delay="600" data-astro-cid-bbe6dxrz> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-bbe6dxrz> <span class="hero-text block text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" data-astro-cid-bbe6dxrz>${stat.number}</span> <span class="hero-text text-xs sm:text-sm md:text-base opacity-90" data-astro-cid-bbe6dxrz>${stat.label}</span> </div>`)} </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4" data-aos="fade-up" data-aos-delay="800" data-astro-cid-bbe6dxrz> <a href="#produccion" class="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 text-center text-sm sm:text-base" data-astro-cid-bbe6dxrz>
Descubre Nuestra Producción
</a> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce" data-aos="fade-up" data-aos-delay="1000" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </section>  `;
}, "/home/project/src/components/Hero.astro", void 0);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const brands = [
    {
      name: "Muare",
      description: "Textil cocina",
      logo: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/muare_marca_7a393496-09c3-447a-8ee4-b69b7ce89259.jpg?v=1732111702",
      url: "https://muarehome.com/"
    },
    {
      name: "Terracota",
      description: "Del Mediterr\xE1neo",
      logo: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/TERRACOTA_eb28f9b2-1073-441a-9f14-b37db241cc93.png?v=1732111733",
      url: "https://terracotacasa.com/"
    },
    {
      name: "SG Partners",
      description: "Trend fabrics",
      logo: "https://cdn.shopify.com/s/files/1/0843/1488/2375/files/sgpartners_logo_3e88b42c-9582-47f3-95e9-93410add60cc.jpg?v=1732111750",
      url: "https://www.sgpartners.es/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-syh6xvgc> <div class="container mx-auto px-4" data-astro-cid-syh6xvgc> <!-- Título de la sección --> <h2 class="text-3xl font-playfair text-center mb-12" data-aos="fade-up" data-astro-cid-syh6xvgc>
Nuestras Marcas
</h2> <!-- Grid de marcas --> <div class="flex flex-wrap justify-center items-stretch gap-12 md:gap-16" data-aos="fade-up" data-aos-delay="100" data-astro-cid-syh6xvgc> ${brands.map((brand, index) => renderTemplate`<a${addAttribute(brand.url, "href")} target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center transition-transform duration-300 hover:scale-105" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}${addAttribute(`Visitar ${brand.name} - ${brand.description}`, "aria-label")} data-astro-cid-syh6xvgc>  <div class="relative w-32 h-12 md:w-40 md:h-14 mb-3" data-astro-cid-syh6xvgc> <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" data-astro-cid-syh6xvgc></div> <img${addAttribute(brand.logo, "src")}${addAttribute(`${brand.name} logo`, "alt")} class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" data-astro-cid-syh6xvgc> </div>  <div class="text-center" data-astro-cid-syh6xvgc> <span class="block text-sm text-gray-500 font-light tracking-wide transition-colors duration-300 group-hover:text-gray-800" data-astro-cid-syh6xvgc> ${brand.description} </span> </div> </a>`)} </div> </div> </section> `;
}, "/home/project/src/components/Brands.astro", void 0);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const productionSections = [
    {
      title: "TELARES",
      description: "18 TELARES Jacquard para tejido de 280cm, 320cm y 326cm de ancho",
      images: [
        {
          url: "https://i.ibb.co/rdKxxR5/TELERS-24.jpg",
          alt: "Telares Jacquard de \xFAltima generaci\xF3n"
        },
        {
          url: "https://i.ibb.co/0DTjQ1G/TELERS-2.jpg",
          alt: "Proceso de tejido especializado"
        },
        {
          url: "https://i.ibb.co/rGYDNt1/TELERS-3.jpg",
          alt: "Control de calidad en telares"
        },
        {
          url: "https://i.ibb.co/xM0J9Rj/SGPARTNERS-50.jpg",
          alt: "Producci\xF3n textil avanzada"
        }
      ]
    },
    {
      title: "ESTAMPACI\xD3N DIGITAL",
      description: "3 m\xE1quinas de estampaci\xF3n digital para todo tipo de tejidos: algod\xF3n, lino y poli\xE9ster",
      images: [
        {
          url: "https://i.ibb.co/fdqV6km/DIGITAL-57.jpg",
          alt: "Estampaci\xF3n digital de alta precisi\xF3n"
        },
        {
          url: "https://i.ibb.co/dcjdMNf/DIGITAL-54.jpg",
          alt: "Proceso de estampaci\xF3n textil"
        },
        {
          url: "https://i.ibb.co/LpbFXDK/DIGITAL-52.jpg",
          alt: "Control de calidad en estampaci\xF3n"
        },
        {
          url: "https://i.ibb.co/j8WKq0k/DIGITAL-33.jpg",
          alt: "Tecnolog\xEDa de estampaci\xF3n avanzada"
        }
      ]
    },
    {
      title: "CONFECCI\xD3N",
      description: "Equipada con acolchadora, cortadora autom\xE1tica, planas, remalladoras y encintadoras",
      images: [
        {
          url: "https://i.ibb.co/LNNv3P5/SG-CONFECCIO-2.jpg",
          alt: "Taller de confecci\xF3n especializado"
        },
        {
          url: "https://i.ibb.co/G0QZQ2F/SG-CONFECCIO-5.jpg",
          alt: "Proceso de confecci\xF3n textil"
        },
        {
          url: "https://i.ibb.co/DfTCBCn/SG-CONFECCIO-8.jpg",
          alt: "Control de calidad en confecci\xF3n"
        },
        {
          url: "https://i.ibb.co/LNmMLpN/SG-CONFECCIO-9.jpg",
          alt: "Acabados de alta calidad"
        }
      ]
    },
    {
      title: "DISE\xD1O",
      description: "Departamento creativo para el desarrollo de colecciones exclusivas",
      images: [
        {
          url: "https://i.ibb.co/vc4yg5Y/DISE-O-7.jpg",
          alt: "Proceso creativo de dise\xF1o"
        },
        {
          url: "https://i.ibb.co/XyKjNYm/DISE-O-6.jpg",
          alt: "Desarrollo de patrones"
        },
        {
          url: "https://i.ibb.co/6DSqSZj/DISE-O-5.jpg",
          alt: "Dise\xF1o de colecciones"
        },
        {
          url: "https://i.ibb.co/F7KHx85/DISE-O-2.jpg",
          alt: "Innovaci\xF3n en dise\xF1o textil"
        }
      ]
    }
  ];
  const finishings = [
    {
      name: "Te\xF1ido",
      description: "Proceso en el que se aplican colorantes al tejido para darle un color uniforme o patrones espec\xEDficos, mejorando su apariencia y versatilidad."
    },
    {
      name: "Estampado",
      description: "T\xE9cnica para aplicar dise\xF1os en la superficie del tejido mediante tintas o colorantes, creando patrones decorativos y personalizados. En nuestro caso es estampaci\xF3n digital (m\xE1s sostenible, m\xE1s calidad, m\xE1s flexibidad)."
    },
    {
      name: "Acabado ign\xEDfugo",
      description: "Procedimiento que aumenta la resistencia del tejido al fuego, utilizado en textiles para ropa de protecci\xF3n y aplicaciones industriales."
    },
    {
      name: "Acabado Anti-Microbiano",
      description: "Aplicaci\xF3n de sustancias que inhiben el crecimiento de microorganismos, proporcionando protecci\xF3n contra bacterias y hongos y alargando la vida \xFAtil del producto."
    },
    {
      name: "Sanforizado",
      description: "Tratamiento que reduce el encogimiento de los tejidos de algod\xF3n o lino."
    },
    {
      name: "Calandrado",
      description: "Procedimiento de compresi\xF3n que le da al tejido un acabado liso, brillante y con mayor densidad, mejorando su aspecto y textura."
    },
    {
      name: "Tratamiento antirr\xE1fagas (anti-pilling)",
      description: 'Acabado que reduce la formaci\xF3n de bolitas o "pilling" en el tejido, prolongando su apariencia nueva y mejorando la calidad del producto.'
    },
    {
      name: "Mercerizado",
      description: "Tratamiento con soda c\xE1ustica aplicado a tejidos de algod\xF3n para mejorar su brillo, resistencia y capacidad de absorci\xF3n de colorantes, logrando un acabado m\xE1s brillante y sedoso."
    },
    {
      name: "Acabado antiarrugas",
      description: "Procedimiento que permite que los tejidos resistan las arrugas y mantengan una apariencia m\xE1s lisa, facilitando el cuidado y reduciendo la necesidad de planchado."
    },
    {
      name: "Acabado suave",
      description: "Uso de agentes suavizantes para mejorar la suavidad y la sensaci\xF3n al tacto del tejido, aumentando su confort al contacto con la piel."
    },
    {
      name: "Acabado repelente a manchas (antimanchas y/o hidr\xF3fugo)",
      description: "Aplicaci\xF3n de sustancias que hacen que los tejidos sean resistentes a las manchas de l\xEDquidos o aceites, mejorando su durabilidad y apariencia en el uso diario."
    },
    {
      name: "Acabado hidr\xF3filo",
      description: "Acabado que permite que los tejidos absorban m\xE1s agua, ideal para productos de cocina tales como servilletas o pa\xF1os de cocina."
    },
    {
      name: "Acabado tumbler",
      description: "Es un proceso mecanico ppara suavizar los tejidos aportando un tacto m\xE1s suave y un aspecto m\xE1s natural y esponjoso."
    }
  ];
  const products = [
    {
      title: "TEJIDOS",
      description: "Jacquard o estampados, destinados a decoraci\xF3n, tapicer\xEDa, contract, hosteler\xEDa o moda."
    },
    {
      title: "PRODUCTO CONFECCIONADO",
      description: "Productos del hogar y puericultura con los m\xE1s altos est\xE1ndares de calidad."
    }
  ];
  const services = [
    {
      title: "DISE\xD1O",
      description: "Equipo multidisciplinar para la creaci\xF3n de colecciones de estampados o Jacquard."
    },
    {
      title: "ASESORAMIENTO",
      description: "Equipo experto en textil para guiarte en tu proyecto y asegurar su \xE9xito."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="produccion" class="py-12 md:py-20 bg-white" data-astro-cid-qnwxz4mj> <div class="container mx-auto px-4" data-astro-cid-qnwxz4mj> <!-- Título principal --> <div class="text-center mb-12 md:mb-16" data-astro-cid-qnwxz4mj> <h2 class="text-4xl md:text-5xl font-playfair font-light text-gray-600 tracking-wider mb-4 md:mb-6" data-aos="fade-up" data-astro-cid-qnwxz4mj>
PRODUCCIÓN KM0
</h2> <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100" data-astro-cid-qnwxz4mj>
Empresa local comprometida con la creación de proyectos textiles desde cero, 
        ofreciendo tejidos y diseños de calidad y vanguardistas.
</p> </div> <!-- Secciones de producción --> ${productionSections.map((section, index) => renderTemplate`<div class="mb-16 md:mb-32 last:mb-0" data-astro-cid-qnwxz4mj> <div class="text-center mb-8 md:mb-12" data-astro-cid-qnwxz4mj> <h3 class="text-3xl md:text-4xl font-playfair tracking-wide mb-3 md:mb-4 px-4" data-aos="fade-up" data-astro-cid-qnwxz4mj> ${section.title} </h3> <p class="text-gray-600 max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="50" data-astro-cid-qnwxz4mj> ${section.description} </p> </div> <div class="max-w-5xl mx-auto px-4" data-astro-cid-qnwxz4mj> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" data-astro-cid-qnwxz4mj> ${section.images.slice(0, 4).map((image, imageIndex) => renderTemplate`<div class="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-square group" data-aos="fade-up"${addAttribute(imageIndex * 100, "data-aos-delay")} data-astro-cid-qnwxz4mj> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" data-astro-cid-qnwxz4mj> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" data-astro-cid-qnwxz4mj> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4" data-astro-cid-qnwxz4mj> <p class="text-white text-center text-xs sm:text-sm md:text-base px-2 sm:px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" data-astro-cid-qnwxz4mj> ${image.alt} </p> </div> </div> </div>`)} </div> </div> </div>`)} <!-- Ennoblecimiento Textil --> <div class="mt-16 md:mt-32 bg-gray-50 p-6 md:p-12 rounded-2xl mx-4" data-astro-cid-qnwxz4mj> <h3 class="text-2xl md:text-3xl font-playfair text-center mb-8 md:mb-12" data-aos="fade-up" data-astro-cid-qnwxz4mj>
ENNOBLECIMIENTO TEXTIL
</h3> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-qnwxz4mj> <!-- Lista de ennoblecimientos --> <div class="space-y-3" data-astro-cid-qnwxz4mj> ${finishings.map((finishing, index) => renderTemplate`<div class="group relative bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")} data-astro-cid-qnwxz4mj> <div class="flex justify-between items-center" data-astro-cid-qnwxz4mj> <span class="text-gray-800 font-medium" data-astro-cid-qnwxz4mj>${finishing.name}</span> <span class="text-gray-400 md:hidden" data-astro-cid-qnwxz4mj>+</span> </div> <!-- Mobile description (hidden by default) --> <div class="mobile-description hidden mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600 md:hidden" data-astro-cid-qnwxz4mj> ${finishing.description} </div> <!-- Desktop hover description --> <div class="description-panel opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-full top-0 ml-4 w-96 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 z-50" data-astro-cid-qnwxz4mj> <h4 class="text-xl font-bold mb-3 font-playfair" data-astro-cid-qnwxz4mj>${finishing.name}</h4> <p class="text-gray-700 text-sm leading-relaxed" data-astro-cid-qnwxz4mj>${finishing.description}</p> <div class="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45" data-astro-cid-qnwxz4mj></div> </div> </div>`)} </div> <!-- Panel de descripción fijo (visible solo en desktop) --> <div class="hidden md:block relative" data-astro-cid-qnwxz4mj> <div class="sticky top-24" data-astro-cid-qnwxz4mj></div> </div> </div> </div> <!-- Productos y Servicios --> <div class="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-32 px-4" data-astro-cid-qnwxz4mj> <!-- Productos --> <div data-astro-cid-qnwxz4mj> <h3 class="text-2xl md:text-3xl font-playfair mb-6 md:mb-8" data-aos="fade-up" data-astro-cid-qnwxz4mj>
PRODUCTOS
</h3> <div class="space-y-4 md:space-y-6" data-astro-cid-qnwxz4mj> ${products.map((product, index) => renderTemplate`<div class="bg-white p-6 md:p-8 rounded-xl shadow-sm transform hover:scale-105 transition-all duration-300" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-qnwxz4mj> <h4 class="text-lg md:text-xl font-medium mb-2 md:mb-3" data-astro-cid-qnwxz4mj>${product.title}</h4> <p class="text-gray-600 text-sm md:text-base" data-astro-cid-qnwxz4mj>${product.description}</p> </div>`)} </div> </div> <!-- Servicios --> <div data-astro-cid-qnwxz4mj> <h3 class="text-2xl md:text-3xl font-playfair mb-6 md:mb-8" data-aos="fade-up" data-astro-cid-qnwxz4mj>
SERVICIOS
</h3> <div class="space-y-4 md:space-y-6" data-astro-cid-qnwxz4mj> ${services.map((service, index) => renderTemplate`<div class="bg-white p-6 md:p-8 rounded-xl shadow-sm transform hover:scale-105 transition-all duration-300" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-astro-cid-qnwxz4mj> <h4 class="text-lg md:text-xl font-medium mb-2 md:mb-3" data-astro-cid-qnwxz4mj>${service.title}</h4> <p class="text-gray-600 text-sm md:text-base" data-astro-cid-qnwxz4mj>${service.description}</p> </div>`)} </div> </div> </div> </div> </section>  `;
}, "/home/project/src/components/Products.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/project/src/components/Features.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" class="py-20 bg-white" data-astro-cid-v2cbyr3p> <div class="container mx-auto px-4" data-astro-cid-v2cbyr3p> <!-- Encabezado de la sección --> <div class="text-center mb-16" data-aos="fade-up" data-astro-cid-v2cbyr3p> <h2 class="text-5xl font-playfair font-bold mb-6" data-astro-cid-v2cbyr3p>Nuestra Esencia</h2> <p class="text-gray-600 max-w-3xl mx-auto" data-astro-cid-v2cbyr3p>
Transformamos espacios con pasión y compromiso, creando ambientes que inspiran y perduran
</p> </div> <!-- Misión, Visión y Valores en cards destacadas --> <div class="grid md:grid-cols-3 gap-8 mb-20" data-astro-cid-v2cbyr3p> <!-- Misión --> <div class="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-astro-cid-v2cbyr3p> <div class="text-4xl text-secondary mb-6" data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v2cbyr3p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-v2cbyr3p></path> </svg> </div> <h3 class="text-2xl font-playfair font-bold mb-4" data-astro-cid-v2cbyr3p>Misión</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-v2cbyr3p>
Facilitamos y acompañamos la creación de proyectos textiles, poniendo nuestra industria al servicio de nuestros partners.
</p> </div> <!-- Visión --> <div class="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="100" data-astro-cid-v2cbyr3p> <div class="text-4xl text-secondary mb-6" data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v2cbyr3p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-v2cbyr3p></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-v2cbyr3p></path> </svg> </div> <h3 class="text-2xl font-playfair font-bold mb-4" data-astro-cid-v2cbyr3p>Visión</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-v2cbyr3p>
Nos inspiramos en la naturaleza, la sociedad y la cultura, en las tradiciones y los pensamientos de las personas. La filosofía a largo plazo busca generar alegría, confort, calidad y vanguardia.
</p> </div> <!-- Valores --> <div class="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="200" data-astro-cid-v2cbyr3p> <div class="text-4xl text-secondary mb-6" data-astro-cid-v2cbyr3p> <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-v2cbyr3p> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-v2cbyr3p></path> </svg> </div> <h3 class="text-2xl font-playfair font-bold mb-4" data-astro-cid-v2cbyr3p>Valores</h3> <ul class="space-y-3 text-gray-600" data-astro-cid-v2cbyr3p> <li class="flex items-center" data-astro-cid-v2cbyr3p> <span class="w-2 h-2 bg-secondary rounded-full mr-2" data-astro-cid-v2cbyr3p></span>
Creemos en las personas
</li> <li class="flex items-center" data-astro-cid-v2cbyr3p> <span class="w-2 h-2 bg-secondary rounded-full mr-2" data-astro-cid-v2cbyr3p></span>
Creemos en un entorno saludable
</li> <li class="flex items-center" data-astro-cid-v2cbyr3p> <span class="w-2 h-2 bg-secondary rounded-full mr-2" data-astro-cid-v2cbyr3p></span>
Creemos que el amor es el futuro
</li> </ul> </div> </div> <!-- Imagen y estadísticas --> <div class="grid md:grid-cols-2 gap-12 items-center" data-astro-cid-v2cbyr3p> <div data-aos="fade-right" data-astro-cid-v2cbyr3p> <div class="relative h-[500px] group" data-astro-cid-v2cbyr3p> <img src="https://cdn.shopify.com/s/files/1/0843/1488/2375/files/IMG_1634.heic?v=1732005349" alt="Sobre SG HOGAR" class="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105" data-astro-cid-v2cbyr3p> <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-v2cbyr3p></div> </div> </div> <div class="space-y-8" data-aos="fade-left" data-astro-cid-v2cbyr3p> <div class="grid grid-cols-2 gap-6" data-astro-cid-v2cbyr3p> <div class="text-center p-6 bg-gray-50 rounded-lg" data-astro-cid-v2cbyr3p> <span class="text-4xl font-bold text-secondary block mb-2" data-astro-cid-v2cbyr3p>19+</span> <p class="text-gray-600" data-astro-cid-v2cbyr3p>Años de Experiencia</p> </div> <div class="text-center p-6 bg-gray-50 rounded-lg" data-astro-cid-v2cbyr3p> <span class="text-4xl font-bold text-secondary block mb-2" data-astro-cid-v2cbyr3p>2000+</span> <p class="text-gray-600" data-astro-cid-v2cbyr3p>Proyectos Realizados</p> </div> </div> </div> </div> </div> </section> `;
}, "/home/project/src/components/About.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      "question": "\xBFA partir de cu\xE1ntos metros puedo a\xF1adir un ennoblecimiento textil espec\xEDfico?",
      "answer": "Depender\xE1 del proceso a realizar. Consulta tu proyecto con nosotros y te asesoraremos sin compromiso."
    },
    {
      "question": "\xBFPuedo pedir el tejido cortado en 140-150 cm o cualquier otra medida?",
      "answer": "En principio, s\xED. Tendremos que valorar la cantidad a cortar y el modo de realizarlo."
    },
    {
      "question": "\xBFPuedo estampar mi propio dise\xF1o?",
      "answer": "En principio, s\xED. Debemos valorar el dise\xF1o y la calidad a imprimir para darte una respuesta m\xE1s concreta. Consulta sin compromiso."
    },
    {
      "question": "\xBFTengo un restaurante y me gustar\xEDa personalizar los manteles jacquard con mi logo, es posible?",
      "answer": "Por supuesto, te asesoramos sin compromiso."
    },
    {
      "question": "\xBFSoy de M\xE9xico y me gustan vuestras telas, pueden enviarlas a cualquier parte del mundo?",
      "answer": "S\xED, tenemos un equipo especializado en env\xEDos internacionales."
    },
    {
      "question": "\xBFTengo un hotel rural de 14 habitaciones y me gustar\xEDa saber si puedo coordinar el edred\xF3n con la cortina y los cojines? Tambi\xE9n me gustar\xEDa saber si elijo unos dise\xF1os y vosotros me hac\xE9is los edredones, cortinas y cojines.",
      "answer": "S\xED, tenemos una gran confecci\xF3n donde podemos acolchar y confeccionar cualquier producto."
    },
    {
      "question": "\xBFTen\xE9is tejidos estampados que puedan lavarse a alta temperatura para mis restaurantes?",
      "answer": "S\xED, tenemos tejidos de poli\xE9ster mate que son ideales para hosteler\xEDa. Cualquier dise\xF1o lo podemos estampar sobre estas bases, y puedes lavarlos a altas temperaturas sin que encojan ni un cent\xEDmetro."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="py-20 bg-white relative overflow-hidden" data-astro-cid-al2ca2vr> <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" data-astro-cid-al2ca2vr></div> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" data-astro-cid-al2ca2vr></div> <div class="container mx-auto px-4 relative" data-astro-cid-al2ca2vr> <div class="text-center mb-16" data-aos="fade-up" data-astro-cid-al2ca2vr> <h2 class="text-4xl md:text-5xl font-playfair font-bold mb-6" data-astro-cid-al2ca2vr>
Preguntas Frecuentes
</h2> <p class="text-gray-600 max-w-2xl mx-auto" data-astro-cid-al2ca2vr>
Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y productos
</p> </div> <div class="max-w-4xl mx-auto" data-astro-cid-al2ca2vr> <div class="grid gap-6" data-aos="fade-up" data-aos-delay="100" data-astro-cid-al2ca2vr> ${faqs.map((faq, index) => renderTemplate`<div class="faq-item bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300" data-aos="fade-up"${addAttribute(index * 50, "data-aos-delay")} data-astro-cid-al2ca2vr> <button class="faq-button w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none" aria-expanded="false" data-astro-cid-al2ca2vr> <span class="text-lg font-medium pr-8" data-astro-cid-al2ca2vr>${faq.question}</span> <span class="transform transition-transform duration-300 text-2xl opacity-70" data-astro-cid-al2ca2vr>+</span> </button> <div class="faq-content overflow-hidden transition-all duration-300 max-h-0" style="transition: max-height 0.3s ease-out;" data-astro-cid-al2ca2vr> <div class="px-6 pb-4 text-gray-600 prose prose-sm max-w-none" data-astro-cid-al2ca2vr>${faq.answer}</div> </div> </div>`)} </div> </div> <div class="mt-16 text-center p-8 bg-black/5 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200" data-astro-cid-al2ca2vr> <h3 class="text-xl font-medium mb-4" data-astro-cid-al2ca2vr>¿No encuentras lo que buscas?</h3> <p class="text-gray-600 mb-6" data-astro-cid-al2ca2vr>
Nuestro equipo está aquí para ayudarte con cualquier pregunta adicional que puedas tener
</p> <button id="openContactModal" class="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300" data-astro-cid-al2ca2vr>
Contáctanos
</button> </div> </div> <!-- Modal de Contacto --> <div id="contactModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center" data-astro-cid-al2ca2vr> <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative" data-astro-cid-al2ca2vr> <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" data-astro-cid-al2ca2vr> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-al2ca2vr></path> </svg> </button> <h3 class="text-2xl font-bold mb-6" data-astro-cid-al2ca2vr>Contacta con nosotros</h3> <form id="contactForm" class="space-y-4" data-astro-cid-al2ca2vr> <div data-astro-cid-al2ca2vr> <label class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-al2ca2vr>Nombre</label> <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" data-astro-cid-al2ca2vr> </div> <div data-astro-cid-al2ca2vr> <label class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-al2ca2vr>Email</label> <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" data-astro-cid-al2ca2vr> </div> <div data-astro-cid-al2ca2vr> <label class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-al2ca2vr>Mensaje</label> <textarea required rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" data-astro-cid-al2ca2vr></textarea> </div> <button type="submit" class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors" data-astro-cid-al2ca2vr>
Enviar mensaje
</button> </form> </div> </div> </section>  `;
}, "/home/project/src/components/FAQ.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Javier Gonzalez",
      content: "La rapidez con la que nos han captado nuestra idea ha sido fundamental para sacar adelante el proyecto. He trabajado con varias empresas textil pero me quedo en SG por su capacidad de innovaci\xF3n en el dise\xF1o.",
      highlight: "capacidad de innovaci\xF3n en el dise\xF1o",
      rating: 5
    },
    {
      name: "Matias Ferrero",
      content: "Conozco la empresa desde hace m\xE1s de 10 a\xF1os. El cambio que han hecho ha sido brutal. Cuando les conoc\xED eran una comercial y ahora son una industria vertical. Qu\xE9 capacidad de crecimiento.",
      highlight: "El cambio que han hecho ha sido brutal",
      rating: 5
    },
    {
      name: "Patricia Salas",
      content: "Hace a\xF1os trabaj\xE9 con SG pero no me convencieron. Hace unos meses decid\xED volver a probar por insistencia comercial y la verdad que es alucinante. La capacidad de dise\xF1o y la calidad de la estampaci\xF3n es excepcional. Dise\xF1amos dibujos peque\xF1os y el detalle de la estampaci\xF3n es extraordinario.",
      highlight: "la calidad de la estampaci\xF3n es excepcional",
      rating: 5
    },
    {
      name: "Alessandro Corvo",
      content: "Son una empresa excepcional, se nota que detr\xE1s hay un equipo joven.",
      highlight: "empresa excepcional",
      rating: 5
    },
    {
      name: "Angelo Letto",
      content: "Desde que trabajamos con SG vendemos m\xE1s, son muy flexibles con la cantidad de metros en las piezas y tienen una capacidad enorme de crear nuevas colecciones.",
      highlight: "capacidad enorme de crear nuevas colecciones",
      rating: 5
    },
    {
      name: "Allan Ker",
      content: "Lo m\xE1s bonito de trabajar con SG es que les presentas la idea y se encargan de todo. Tienen toda la maquinaria necesaria para nuestros proyectos.",
      highlight: "se encargan de todo",
      rating: 5
    },
    {
      name: "Tomas Velasco",
      content: "Tener una f\xE1brica en Espa\xF1a de estas caracter\xEDsticas es una suerte para los que tenemos tiendas de decoraci\xF3n. Podemos ofrecer servicios que para los importadores ser\xEDa impensable.",
      highlight: "Podemos ofrecer servicios que para los importadores ser\xEDa impensable",
      rating: 5
    },
    {
      name: "Juan Miguel",
      content: "El dise\xF1o que tienen es alucinante, cada d\xEDa me sorprenden.",
      highlight: "cada d\xEDa me sorprenden",
      rating: 5
    },
    {
      name: "Marco Frias",
      content: "Para m\xED trabajar con SG significa calidad, dise\xF1o, innovaci\xF3n a un precio justo.",
      highlight: "calidad, dise\xF1o, innovaci\xF3n a un precio justo",
      rating: 5
    }
  ];
  const generateStars = (rating) => {
    return "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-black text-white overflow-hidden" data-astro-cid-aadlzisc> <div class="container mx-auto px-4" data-astro-cid-aadlzisc> <!-- Título de la sección --> <h2 class="text-4xl font-playfair font-bold text-center mb-16" data-aos="fade-up" data-astro-cid-aadlzisc>
¿Qué piensan nuestros clientes?
</h2> <!-- Contenedor de testimonios con diseño escalonado --> <div class="testimonials-container" data-astro-cid-aadlzisc> ${testimonials.map((testimonial, index) => renderTemplate`<article class="testimonial-card" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}${addAttribute(`--card-index: ${index}`, "style")} data-astro-cid-aadlzisc> <!-- Cabecera con nombre y calificación --> <header class="mb-4" data-astro-cid-aadlzisc> <div class="flex justify-between items-center mb-2" data-astro-cid-aadlzisc> <h3 class="text-lg font-bold" data-astro-cid-aadlzisc>${testimonial.name}</h3> <div class="text-yellow-400 tracking-wider" role="img"${addAttribute(`Calificaci\xF3n: ${testimonial.rating} de 5 estrellas`, "aria-label")} data-astro-cid-aadlzisc> ${generateStars(testimonial.rating)} </div> </div> </header> <!-- Contenido del testimonio --> <div class="space-y-3" data-astro-cid-aadlzisc> <p class="text-gray-300 text-sm leading-relaxed" data-astro-cid-aadlzisc> ${testimonial.content.split(testimonial.highlight).map((part, i, arr) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate`${part}${i < arr.length - 1 && renderTemplate`<span class="text-white font-medium" data-astro-cid-aadlzisc> ${testimonial.highlight} </span>`}` })}`)} </p> </div> <!-- Decoración de la tarjeta --> <div class="card-decoration" data-astro-cid-aadlzisc></div> </article>`)} </div> </div> </section>  `;
}, "/home/project/src/components/Testimonials.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
    },
    {
      name: "Instagram",
      url: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"></path><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"></path></svg>`
    },
    {
      name: "Pinterest",
      url: "#",
      icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>`
    }
  ];
  const contactInfo = {
    phone: "+34 672 64 39 99",
    email: "customer@sgpartners.es",
    address: "Avinguda del Textil 63 , cp. 4683 , Ontinyent , Valencia"
  };
  const legalLinks = [
    {
      name: "Aviso Legal",
      url: "/aviso-legal"
    },
    {
      name: "Pol\xEDtica de Privacidad",
      url: "/politica-privacidad"
    },
    {
      name: "Pol\xEDtica de Cookies",
      url: "/politica-cookies"
    }
  ];
  return renderTemplate`<!-- Footer con fondo negro y efectos visuales -->${maybeRenderHead()}<footer class="bg-black text-white" data-astro-cid-sz7xmlte> <div class="container mx-auto px-4 py-12" data-astro-cid-sz7xmlte> <div class="grid md:grid-cols-3 gap-8 mb-12" data-astro-cid-sz7xmlte> <!-- Logo y información de contacto --> <div class="flex flex-col gap-6" data-astro-cid-sz7xmlte> <!-- Logo con efectos de hover --> <div class="group relative" data-astro-cid-sz7xmlte> <!-- Efecto de resplandor en hover --> <div class="absolute -inset-4 bg-white/5 rounded-lg blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl" data-astro-cid-sz7xmlte></div> <div class="relative" data-astro-cid-sz7xmlte> <img src="https://cdn.shopify.com/s/files/1/0843/1488/2375/files/sg_hogar_marca.png?v=1732020859" alt="SG HOGAR Logo" class="h-16 object-contain transition-all duration-500 group-hover:scale-105" data-aos="fade-right" data-astro-cid-sz7xmlte> <!-- Overlay gradiente en hover --> <div class="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-sz7xmlte></div> </div> </div> <!-- Información de contacto --> <div class="text-sm text-gray-400 space-y-2" data-aos="fade-right" data-aos-delay="100" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>${contactInfo.address}</p> <p data-astro-cid-sz7xmlte>Tel: ${contactInfo.phone}</p> <p data-astro-cid-sz7xmlte>${contactInfo.email}</p> </div> </div> <!-- Enlaces legales --> <div class="flex flex-col gap-4" data-aos="fade-up" data-astro-cid-sz7xmlte> <h3 class="text-lg font-semibold mb-2" data-astro-cid-sz7xmlte>Legal</h3> ${legalLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="text-gray-400 hover:text-white transition-colors duration-300 text-sm" data-astro-cid-sz7xmlte> ${link.name} </a>`)} </div> <!-- Enlaces a redes sociales --> <div class="flex flex-col gap-4" data-aos="fade-left" data-astro-cid-sz7xmlte> <h3 class="text-lg font-semibold mb-2" data-astro-cid-sz7xmlte>Síguenos</h3> <div class="flex gap-6" data-astro-cid-sz7xmlte> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} class="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"${addAttribute(social.name, "aria-label")} data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(social.icon)}` })} </a>`)} </div> </div> </div> <!-- Copyright y aviso de cookies --> <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500" data-aos="fade-up" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} SG HOGAR. Todos los derechos reservados.</p> <p class="text-center md:text-right" data-astro-cid-sz7xmlte>
Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra
<a href="/politica-cookies" class="underline hover:text-white transition-colors" data-astro-cid-sz7xmlte>Política de Cookies</a>.
</p> </div> </div> </footer> `;
}, "/home/project/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SG HOGAR - Especialistas en Decoraci\xF3n Textil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
