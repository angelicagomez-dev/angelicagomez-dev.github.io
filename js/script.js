
(function () {
  'use strict';

  const IMG_DIR = 'images/';

  const PROJECTS = [
    { name: 'Columbus School', url: 'https://columbus.edu.co/', img: 'columbus-desk.png', hue: 215,
      cat:  { en: 'Education, WordPress', es: 'Educación, WordPress' },
      desc: { en: 'Migration from Gutenberg to Elementor, custom job listings and forms, ongoing maintenance.',
              es: 'Migración de Gutenberg a Elementor, listados de empleo y formularios a medida, mantenimiento continuo.' } },
    { name: 'Viviendas y Proyectos', url: 'http://viviendasyproyectos.com/', img: 'viviendasyproyectos-desk.png', hue: 20,
      cat:  { en: 'Real estate, CMS', es: 'Inmobiliaria, CMS' },
      desc: { en: 'Redesigned project pages with individual templates and an external forms API integration.',
              es: 'Rediseño de páginas de proyecto con plantillas individuales e integración con una API externa de formularios.' } },
    { name: 'Droguería Ética', url: 'https://www.drogueriaetica.com/', img: 'drogueriaetica-desk.png', hue: 160,
      cat:  { en: 'E-commerce, WordPress', es: 'E-commerce, WordPress' },
      desc: { en: 'Redesigned the store, implemented a new theme and managed a new product import.',
              es: 'Rediseño de la tienda, implementación de un tema nuevo y gestión de una nueva importación de productos.' } },
    { name: 'Kinky Mascotas', url: 'https://kinkymascotas.co/', img: 'kinkymascotas-desk.png', hue: 330,
      cat:  { en: 'E-commerce, pets', es: 'E-commerce, mascotas' },
      desc: { en: 'Built the original e-commerce site structure and implementation.',
              es: 'Construcción de la estructura y la implementación original del sitio de e-commerce.' } },
    { name: 'Campo Origen', url: 'https://www.camporigen.com/', img: 'camporigen-desk.png', hue: 100,
      cat:  { en: 'Corporate, WordPress', es: 'Corporativo, WordPress' },
      desc: { en: 'Complete layout plus custom hierarchy functionality with PHP and JavaScript.',
              es: 'Maquetación completa más funcionalidad de jerarquía a medida con PHP y JavaScript.' } },
    { name: 'Color Amazonía', url: 'https://coloramazonia.com/', img: 'coloramazonia-desk.png', hue: 280,
      cat:  { en: 'Creative, interactive', es: 'Creativo, interactivo' },
      desc: { en: 'Built from scratch with a custom interactive gallery and pop-ups in JavaScript and PHP.',
              es: 'Construido desde cero con una galería interactiva a medida y ventanas emergentes en JavaScript y PHP.' } },
    { name: 'Malena Golden Roses', url: '', img: 'malena-desk.png', hue: 350,
      cat:  { en: 'E-commerce, Shopify', es: 'E-commerce, Shopify' },
      desc: { en: 'Archived Shopify storefront (no longer live).', es: 'Tienda Shopify archivada (ya no está en línea).' } },
    { name: 'Macaria', url: '', img: 'macaria-desk.png', hue: 40,
      cat:  { en: 'E-commerce, Shopify', es: 'E-commerce, Shopify' },
      desc: { en: 'Archived Shopify storefront (no longer live).', es: 'Tienda Shopify archivada (ya no está en línea).' } }
  ];


  const TOOLS = [
    { name: 'WordPress',   file: 'wordpress.svg' },
    { name: 'Shopify',     file: 'shopify.svg' },
    { name: 'WooCommerce', file: 'woocommerce.svg', wide: true },
    { name: 'Elementor',   file: 'elementor.svg' },
    { name: 'ACF',         file: 'acf.svg' },
    { name: 'PHP',         file: 'php.svg' },
    { name: 'JavaScript',  file: 'javascript.svg' },
    { name: 'React',       file: 'react.svg' },
    { name: 'Python',      file: 'python.svg' },
    { name: 'Git',         file: 'git.svg' },
    { name: 'HTML5',       file: 'html5.svg' },
    { name: 'CSS3',        file: 'css.svg' },
    { name: 'Bootstrap',   file: 'bootstrap.svg' },
    { name: 'MySQL',       file: 'mysql.svg' },
    { name: 'SiteGround',  file: 'siteground.svg' },
    { name: 'cPanel',      file: 'cpanel.svg', wide: true }
  ];


  const MARQUEE_ROWS = [
    ['WordPress', 'Shopify', 'WooCommerce', 'Elementor', 'Gutenberg', 'SiteGround', 'cPanel'],
    ['ACF', 'PHP', 'JavaScript', 'React', 'Python', 'Git', 'HTML5', 'CSS3', 'Bootstrap', 'SQL']
  ];


  const ROLES = {
    en: ['custom WordPress themes', 'Shopify storefronts', 'WooCommerce stores', 'ACF and custom post types', 'API integrations'],
    es: ['temas de WordPress a medida', 'tiendas Shopify', 'tiendas WooCommerce', 'ACF y tipos de contenido personalizados', 'integraciones con APIs']
  };


  const TESTIMONIAL = {
    quote: { en: '', es: '' },     
    name: '',                      
    role: '',                      
    company: 'Pacífica Diseño',
    linkedin: ''                  
  };


  const ES = {

    "About": "Sobre mí",
    "Why me": "Por qué yo",
    "Journey": "Trayectoria",
    "Work": "Trabajo",
    "Contact": "Contacto",

    "Web developer with 6+ years turning designs into fast, maintainable WordPress and Shopify sites.": "Desarrolladora web con más de 6 años convirtiendo diseños en sitios WordPress y Shopify rápidos y fáciles de mantener.",
    "I build": "Desarrollo",
    "See my work": "Ver mi trabajo",
    "Download CV": "Descargar CV",
    "Email me": "Escríbeme",
    "Open to remote roles": "Disponible para roles remotos",

    "Industries I’ve worked in: education, e-commerce, real estate, healthcare, sustainability, industrial, professional services and pet care.": "Industrias en las que he trabajado: educación, e-commerce, inmobiliaria, salud, sostenibilidad, industrial, servicios profesionales y cuidado de mascotas.",
    "years of professional experience": "años de experiencia profesional",
    "professional projects": "proyectos profesionales",
    "core technologies and platforms": "tecnologías y plataformas principales",

    "Tools I work with": "Herramientas con las que trabajo",
    "What I bring": "Lo que aporto",
    "to your team": "a tu equipo",
    "I build from design to launch": "Construyo desde el diseño hasta el lanzamiento",
    "I take a layout and ship a responsive site, including full builds from scratch with no template to lean on.": "Tomo un diseño y entrego un sitio responsivo, incluidos desarrollos completos desde cero, sin plantilla de apoyo.",
    "I go beyond the theme": "Voy más allá del tema",
    "When a plugin isn’t enough I write PHP hooks and JavaScript, and connect external APIs. Reusable ACF templates let clients update pages without calling a developer.": "Cuando un plugin no alcanza, escribo hooks de PHP y JavaScript y conecto APIs externas. Las plantillas reutilizables con ACF permiten a los clientes actualizar páginas sin llamar a un desarrollador.",
    "I redesign and migrate with care": "Rediseño y migro con cuidado",
    "Page-builder migrations, store redesigns and product imports on sites that are already live and selling.": "Migraciones entre constructores de páginas, rediseños de tiendas e importaciones de productos en sitios que ya están en línea y vendiendo.",
    "I stay and keep it healthy": "Me quedo y lo mantengo sano",
    "Almost seven years in the same team, maintaining and improving the sites I help build, so clients keep a partner and not a one-off job.": "Casi siete años en el mismo equipo, manteniendo y mejorando los sitios que ayudo a construir, para que los clientes tengan una aliada y no un trabajo de una sola vez.",
    "I care about speed": "Me importa la velocidad",
    "Image and asset optimization, cleaner theme code and sensible hosting setup, checked with Lighthouse and PageSpeed Insights instead of guesswork.": "Optimización de imágenes y recursos, código de tema más limpio y una configuración de hosting sensata, verificada con Lighthouse y PageSpeed Insights en lugar de suposiciones.",
    "I set it up to be measured": "Lo dejo listo para medirse",
    "Storefront and product page redesigns, large product imports, and tracking so clients can see how their campaigns perform.": "Rediseños de tienda y páginas de producto, importaciones grandes de productos y seguimiento para que los clientes vean cómo rinden sus campañas.",

    "Click to flip ↻": "Clic para girar ↻",
    "Where you can see it": "Dónde verlo",
    "Build": "Construir",
    "Custom": "A medida",
    "Migrate": "Migrar",
    "Maintain": "Mantener",
    "Speed": "Velocidad",
    "Measure": "Medir",
    "Drag or click me": "Arrástrame o haz clic",

    "How I work": "Cómo trabajo",
    "Understand": "Entender",
    "I study the brief and the design, and ask about goals, content and constraints before writing code.": "Estudio el brief y el diseño, y pregunto por objetivos, contenido y restricciones antes de escribir código.",
    "Responsive layouts in WordPress or Shopify, clean templates and content structures clients can manage on their own.": "Diseños responsivos en WordPress o Shopify, plantillas limpias y estructuras de contenido que los clientes pueden gestionar por su cuenta.",
    "Customize": "Personalizar",
    "PHP, JavaScript, ACF and custom post types where a plugin falls short, plus integrations with external services.": "PHP, JavaScript, ACF y tipos de contenido personalizados donde un plugin se queda corto, además de integraciones con servicios externos.",
    "Launch & maintain": "Lanzar y mantener",
    "Migrations, pre-launch checks, updates and ongoing support after go-live.": "Migraciones, revisiones previas al lanzamiento, actualizaciones y soporte continuo después de salir en vivo.",

    "Where": "Mi",
    "I’ve been": "recorrido",
    "Web Developer": "Desarrolladora Web",
    "at Pacífica Diseño": "en Pacífica Diseño",
    "50+ WordPress, WooCommerce and Shopify projects: new builds, redesigns, migrations and maintenance. Custom PHP, JavaScript and Liquid, API integrations, platform migrations (including Gutenberg to Elementor), and work done autonomously, making technical decisions aligned with project goals.": "50+ proyectos en WordPress, WooCommerce y Shopify: desarrollos nuevos, rediseños, migraciones y mantenimiento. PHP, JavaScript y Liquid a medida, integraciones con APIs, migraciones de plataforma (incluido Gutenberg a Elementor) y trabajo autónomo, tomando decisiones técnicas alineadas con los objetivos del proyecto.",
    "2019 — Present": "2019 — Presente",
    "Freelance Web Developer": "Desarrolladora Web Freelance",
    "independent client work": "trabajo independiente con clientes",
    "Responsive WordPress sites and Shopify themes with custom functionality, forms and integrations. Projects managed end to end, turning client requirements into maintainable solutions.": "Sitios WordPress responsivos y temas Shopify con funcionalidad a medida, formularios e integraciones. Proyectos gestionados de principio a fin, convirtiendo los requerimientos del cliente en soluciones mantenibles.",
    "Education": "Educación",
    "Technologist in Analysis and Development of Information Systems": "Tecnóloga en Análisis y Desarrollo de Sistemas de Información",
    "Languages: Spanish (native), English (B2).": "Idiomas: español (nativo), inglés (B2).",

    "Selected work": "Trabajos seleccionados",
    "Scroll to rotate": "Desplázate para girar",
    "Visit website": "Visitar sitio",
    "More web projects": "Más proyectos web",

    "Hiring for WordPress, Shopify or web development? I’m open to remote roles and I’d like to hear about yours.": "¿Buscas a alguien para WordPress, Shopify o desarrollo web? Estoy abierta a roles remotos y me encantaría conocer el tuyo.",
    "Back to top": "Volver arriba",
    "© 2026 Angélica Gómez · WordPress, Shopify & Web Developer": "© 2026 Angélica Gómez · Desarrolladora Web WordPress y Shopify",
    "WORDPRESS • SHOPIFY • WEB DEVELOPER •": "WORDPRESS • SHOPIFY • DESARROLLADORA WEB •",
    "SAY HELLO • REMOTE ROLES • AVAILABLE •": "HOLA • ROLES REMOTOS • DISPONIBLE •",
    "View on LinkedIn": "Ver en LinkedIn",
    "Campo Origen hierarchy": "Jerarquía de Campo Origen",
    "Color Amazonía gallery": "Galería de Color Amazonía",
    "Viviendas y Proyectos forms API": "API de formularios de Viviendas y Proyectos",
    "conversion tracking": "seguimiento de conversiones",
  };


  const NO_TRANSLATE = '.mbtn,.lng,#tw,#scrub,#lt,#lName,#lDesc,#list,#ldn,#rtxt,#tmq,#tmn,#tmr,#tmi,.card,script,style,noscript';


  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const byId = (id) => document.getElementById(id);
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const isTouch = (e) => e.pointerType === 'touch';

  function onceVisible(el, fn, options) {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { io.disconnect(); fn(); }
    }, options || {});
    io.observe(el);
  }

  function stickyProgress(section) {
    return clamp(-section.getBoundingClientRect().top / (section.offsetHeight - innerHeight), 0, 1);
  }


  let lang = 'en';   



  function initLoader() {
    const overlay = byId('ld'), ring = byId('ldc'), label = byId('ldn');
    const root = document.documentElement;
    const CIRCUMFERENCE = 326.7;   
    const MIN_SECONDS = 1.7;
    const start = performance.now();
    let shown = 0, pageLoaded = document.readyState === 'complete', fontsReady = false;

    root.classList.add('ld');      
    if (!pageLoaded) addEventListener('load', () => { pageLoaded = true; });
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { fontsReady = true; });
    setTimeout(() => { pageLoaded = fontsReady = true; }, 4000);   

    function finish() {
      overlay.classList.add('out');
      root.classList.remove('ld');
      document.body.classList.add('go');
      setTimeout(() => overlay.remove(), 800);
    }
    (function step(now) {
      const elapsed = (now - start) / 1000;
      const timeBased = 100 * (1 - Math.pow(1 - Math.min(1, elapsed / MIN_SECONDS), 2));
      const cap = (pageLoaded && fontsReady) ? 100 : 92;
      shown += (Math.min(timeBased, cap) - shown) * 0.12;
      label.textContent = Math.round(shown) + '%';
      ring.style.strokeDashoffset = CIRCUMFERENCE * (1 - shown / 100);
      if (shown > 99.4) {
        label.textContent = '100%';
        ring.style.strokeDashoffset = 0;
        setTimeout(finish, 350);
      } else requestAnimationFrame(step);
    })(start);
  }


  const menuBtn = $('.mbtn');
  const menuPanel = byId('mnav');
  const progressBar = byId('bar');

  function menuLabel(open) {
    return lang === 'es' ? (open ? 'Cerrar' : 'Menú') : (open ? 'Close' : 'Menu');
  }
  function setMenu(open) {
    menuPanel.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = menuLabel(open);
  }
  function initNav() {
    menuBtn.addEventListener('click', () => setMenu(!menuPanel.classList.contains('open')));
    menuPanel.addEventListener('click', (e) => { if (e.target.tagName === 'A') setMenu(false); });
  }
  
  function updateProgressBar() {
    progressBar.style.transform = 'scaleX(' + (scrollY / (document.documentElement.scrollHeight - innerHeight)) + ')';
  }


  function initCursor() {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const cursor = byId('cur'), dot = cursor.children[0], ring = cursor.children[1];
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.body.classList.add('fine');
    addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; });
    (function follow() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(follow);
    })();
    document.addEventListener('pointerover', (e) => {
      cursor.classList.toggle('big', !!(e.target.closest && e.target.closest('a,button,.wy')));
    });
    $$('.mag').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.3) + 'px,' +
                                            ((e.clientY - r.top - r.height / 2) * 0.4) + 'px)';
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }


  
  const typer = { el: byId('tw'), i: 0, chars: 0, deleting: false };

  function typerStep() {
    const list = ROLES[lang], text = list[typer.i % list.length];
    typer.chars += typer.deleting ? -1 : 1;
    typer.el.textContent = text.slice(0, typer.chars);
    let delay = typer.deleting ? 30 : 70;
    if (!typer.deleting && typer.chars === text.length) { typer.deleting = true; delay = 1400; }
    else if (typer.deleting && typer.chars === 0) { typer.deleting = false; typer.i = (typer.i + 1) % list.length; delay = 300; }
    setTimeout(typerStep, delay);
  }
  function resetTyper() { typer.i = 0; typer.chars = 0; typer.deleting = false; }

  function initHero() {
    const hero = byId('home'), t0 = performance.now();
    let pointerUsed = false;
    const setLight = (x, y) => { hero.style.setProperty('--x', x + 'px'); hero.style.setProperty('--y', y + 'px'); };

    hero.addEventListener('pointermove', (e) => {
      pointerUsed = true;
      const r = hero.getBoundingClientRect();
      setLight(e.clientX - r.left, e.clientY - r.top);
    });
    (function idle(t) {
      if (!pointerUsed) {
        const s = (t - t0) / 1800;
        setLight(hero.clientWidth * (0.5 + 0.38 * Math.sin(s)), hero.clientHeight * (0.45 + 0.2 * Math.sin(s * 1.7)));
      }
      requestAnimationFrame(idle);
    })(t0);

    typerStep();
  }


  const revealSec = byId('reveal');
  const swirlCanvas = byId('swirl');
  const swirlCtx = swirlCanvas.getContext('2d');
  const revealTitle = byId('rtxt');
  const swirl = { w: 0, h: 0, points: [], time: 0, visible: true, running: false };

  function sizeSwirl() {
    swirl.w = swirlCanvas.width = innerWidth;
    swirl.h = swirlCanvas.height = innerHeight;
    swirlCtx.fillStyle = '#0a080d';
    swirlCtx.fillRect(0, 0, swirl.w, swirl.h);
  }
  
  function drawSwirl() {
    const { w, h, points } = swirl, c = swirlCtx;
    swirl.time += 0.004;
    c.fillStyle = 'rgba(10,8,13,.08)';
    c.fillRect(0, 0, w, h);
    points.forEach((p) => {
      const a = Math.sin(p[0] * 0.004 + swirl.time) * 2 + Math.cos(p[1] * 0.005 - swirl.time * 1.3) * 2 + Math.sin((p[0] + p[1]) * 0.002) * 3;
      const nx = p[0] + Math.cos(a) * 2.2, ny = p[1] + Math.sin(a) * 2.2, bright = p[2] > 0.85;
      c.strokeStyle = bright ? '#f0e2fb' : 'rgba(236,220,250,' + (0.2 + p[2] * 0.5) + ')';
      c.lineWidth = bright ? 1.6 : 0.8;
      c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(nx, ny); c.stroke();
      p[0] = nx; p[1] = ny;
      if (nx < 0 || nx > w || ny < 0 || ny > h) { p[0] = Math.random() * w; p[1] = Math.random() * h; }
    });
  }
  function loopSwirl() {
    if (!swirl.visible) { swirl.running = false; return; }   
    swirl.running = true; drawSwirl(); requestAnimationFrame(loopSwirl);
  }
  function initSwirl() {
    sizeSwirl();
    for (let i = 0; i < 700; i++) swirl.points.push([Math.random() * swirl.w, Math.random() * swirl.h, Math.random()]);
    addEventListener('resize', sizeSwirl);
    loopSwirl();
    new IntersectionObserver((e) => { swirl.visible = e[0].isIntersecting; if (swirl.visible && !swirl.running) loopSwirl(); }).observe(revealSec);
  }
  
  function updateReveal() {
    const p = stickyProgress(revealSec);
    const e = 1 - Math.pow(1 - Math.min(1, p * 1.5), 3);   
    const insetY = (innerHeight - 340) / 2 * (1 - e);
    const insetX = (innerWidth - Math.min(260, innerWidth * 0.7)) / 2 * (1 - e);
    swirlCanvas.style.clipPath = 'inset(' + insetY + 'px ' + insetX + 'px round ' + (16 * (1 - e)) + 'px)';
    revealTitle.style.transform = 'scale(' + (1 + e * 1.4) + ')';
  }

  
  const scrubEl = byId('scrub');
  const SCRUB_EN = scrubEl.textContent;       
  const SCRUB_ES = 'Convierto diseños y requerimientos de negocio en sitios web responsivos y fáciles de mantener. Seis años en una misma agencia, más de 50 proyectos en educación, inmobiliaria, salud, e-commerce y más, desde el primer diseño hasta el mantenimiento a largo plazo.';
  function buildScrub(text) {   
    scrubEl.innerHTML = text.split(' ').map((w) => '<span>' + w + '</span>').join(' ');
  }
  function updateScrub() {
    const words = scrubEl.children;
    const q = clamp((innerHeight * 0.85 - scrubEl.getBoundingClientRect().top) / (innerHeight * 0.5), 0, 1);
    for (let i = 0; i < words.length; i++) words[i].style.opacity = q * words.length > i ? 1 : 0.18;
  }

  
  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const el = en.target, target = +el.dataset.n, t0 = performance.now();
        (function tick(t) {
          const k = Math.min(1, (t - t0) / 1200);
          el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + '+';
          if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    });
    $$('.stats b').forEach((b) => io.observe(b));
  }

  function initPhoto() {
    const figure = byId('me'), tilt = byId('tilt'), area = figure.parentNode;
    onceVisible(figure, () => figure.classList.add('in'), { threshold: 0.35 });
    area.addEventListener('pointermove', (e) => {
      if (isTouch(e)) return;
      const r = figure.getBoundingClientRect();
      tilt.style.transform = 'perspective(800px) rotateY(' + (((e.clientX - r.left) / r.width - 0.5) * 22) + 'deg) rotateX(' + (((e.clientY - r.top) / r.height - 0.5) * -18) + 'deg)';
    });
    area.addEventListener('pointerleave', () => { tilt.style.transform = ''; });
  }


  function initTools() {
    const grid = byId('tgrid');
    TOOLS.forEach((t, i) => {
      const dur = (4 + (i * 37 % 30) / 10).toFixed(1);   
      const delay = ((i * 53 % 40) / 10).toFixed(1);     
      grid.insertAdjacentHTML('beforeend',
        '<div class="lg' + (t.wide ? ' wide' : '') + '" style="--du:' + dur + 's;--dl:-' + delay + 's">' +
        '<div class="in"><img src="' + IMG_DIR + t.file + '" alt="' + t.name + '" width="46" height="46" loading="lazy"></div>' +
        '<span>' + t.name + '</span></div>');
    });
    $$('.lg img', grid).forEach((img) => img.addEventListener('error', () => {
      const fb = document.createElement('b'); fb.className = 'fb'; fb.textContent = img.alt.slice(0, 3);
      img.replaceWith(fb);
    }));

    const logos = $$('.lg', grid);
    grid.addEventListener('pointermove', (e) => {
      if (isTouch(e)) return;
      logos.forEach((l) => {
        const r = l.getBoundingClientRect();
        const dx = r.left + r.width / 2 - e.clientX, dy = r.top + 38 - e.clientY;
        const d = Math.hypot(dx, dy), k = Math.max(0, 1 - d / 150);   // 1 = encima del cursor
        l.firstChild.style.transform = 'translate(' + (dx / (d || 1) * k * 34) + 'px,' + (dy / (d || 1) * k * 34) + 'px) scale(' + (1 + k * 0.18) + ')';
      });
    });
    grid.addEventListener('pointerleave', () => logos.forEach((l) => { l.firstChild.style.transform = ''; }));
  }



  const whySec = byId('why');
  const whyCards = $$('.wy');
  const whyGrid = $('.wygrid');

 
  function initWhy() {
    onceVisible(whySec, () => whySec.classList.add('in'), { rootMargin: '0px 0px -22% 0px' });

    const title = $('.why h2');
    whySec.addEventListener('pointermove', (e) => {
      if (isTouch(e)) return;
      const r = whySec.getBoundingClientRect();
      title.style.transform = 'perspective(1000px) rotateY(' + ((e.clientX / innerWidth - 0.5) * 18) + 'deg) rotateX(' + (((e.clientY - r.top) / r.height - 0.3) * -12) + 'deg)';
    });
    whySec.addEventListener('pointerleave', () => { title.style.transform = ''; });

    whyCards.forEach((card, i) => {
      card.style.setProperty('--i', i);   

      
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.transform = 'perspective(700px) rotateX(' + ((0.5 - (e.clientY - r.top) / r.height) * 14) + 'deg) rotateY(' + (((e.clientX - r.left) / r.width - 0.5) * 14) + 'deg)';
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });

      
      const h3 = $('h3', card), p = $('p', card), evidence = $('small', card).textContent.split(' · ').join('<br>');
      card.innerHTML = '<div class="f"><div class="fr"></div><div class="bk"><h3>Where you can see it</h3><small>' + evidence + '</small></div></div>';
      const front = $('.fr', card);
      front.appendChild(h3); front.appendChild(p);
      front.insertAdjacentHTML('beforeend', '<em class="hnt">Click to flip ↻</em>');

      
      card.tabIndex = 0; card.setAttribute('role', 'button');
      card.addEventListener('click', () => card.classList.toggle('flip'));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('flip'); }
      });
    });
  }

  
  const FACE_NORMALS = [[0, 0, 1], [0, 0, -1], [1, 0, 0], [-1, 0, 0], [0, -1, 0], [0, 1, 0]];
  const FACE_TARGETS = [[0, 0], [0, 180], [0, -90], [0, 90], [-90, 0], [90, 0]];
  const cube = {
    el: byId('cube'), wrap: byId('cubew'),
    rx: -22, ry: 30,          
    vx: 0, vy: 0,             
    dragging: false, lastX: 0, lastY: 0, moved: 0, pressedFace: null,
    target: null,             
    idle: 0,                  
    active: -1                
  };

  
  function frontFace() {
    const a = cube.rx * Math.PI / 180, b = cube.ry * Math.PI / 180;
    let best = -9, index = 0;
    FACE_NORMALS.forEach((n, i) => {
      const z = -n[0] * Math.sin(b) + n[2] * Math.cos(b);
      const zz = n[1] * Math.sin(a) + z * Math.cos(a);
      if (zz > best) { best = zz; index = i; }
    });
    return index;
  }
  function highlightCard(i) {
    whyCards.forEach((c, k) => c.classList.toggle('act', k === i));
    whyGrid.classList.add('has-act');
  }
  function rotateCubeTo(i) { cube.target = FACE_TARGETS[i]; cube.idle = 0; }

  function initCube() {
    const w = cube.wrap;
    w.addEventListener('pointerdown', (e) => {
      cube.dragging = true; cube.target = null; cube.vx = cube.vy = 0; cube.moved = 0;
      cube.lastX = e.clientX; cube.lastY = e.clientY;
      cube.pressedFace = e.target.closest('i');
      w.setPointerCapture(e.pointerId);
    });
    w.addEventListener('pointermove', (e) => {
      if (!cube.dragging) return;
      const dx = e.clientX - cube.lastX, dy = e.clientY - cube.lastY;
      cube.lastX = e.clientX; cube.lastY = e.clientY;
      cube.moved += Math.abs(dx) + Math.abs(dy);
      cube.vy = dx * 0.6; cube.vx = -dy * 0.6;
      cube.ry += cube.vy; cube.rx += cube.vx;
    });
    w.addEventListener('pointerup', () => {
      cube.dragging = false; cube.idle = 0;
      if (cube.moved < 6 && cube.pressedFace) {          // clic sin arrastrar
        const i = +cube.pressedFace.dataset.i;
        rotateCubeTo(i); whyCards[i].classList.toggle('flip');
      }
    });
    /* Al pasar el mouse por una tarjeta, el cubo gira a su cara. */
    whyCards.forEach((c, i) => c.addEventListener('pointerenter', (e) => { if (!isTouch(e)) rotateCubeTo(i); }));

    (function frame() {
      if (!cube.dragging) {
        if (cube.target) {
          /* Gira por el camino más corto hacia la cara elegida. */
          const ty = cube.target[1] + 360 * Math.round((cube.ry - cube.target[1]) / 360);
          const tx = cube.target[0] + 360 * Math.round((cube.rx - cube.target[0]) / 360);
          cube.rx += (tx - cube.rx) * 0.1; cube.ry += (ty - cube.ry) * 0.1;
          if (Math.abs(tx - cube.rx) + Math.abs(ty - cube.ry) < 0.4) { cube.rx = tx; cube.ry = ty; cube.target = null; }
        } else {
          /* Inercia con fricción; si nadie lo toca, gira despacio solo. */
          cube.rx += cube.vx; cube.ry += cube.vy; cube.vx *= 0.94; cube.vy *= 0.94; cube.idle++;
          if (cube.idle > 140 && Math.abs(cube.vx) + Math.abs(cube.vy) < 0.05) cube.ry += 0.3;
        }
      }
      cube.el.style.transform = 'rotateX(' + cube.rx + 'deg) rotateY(' + cube.ry + 'deg)';
      const f = frontFace();
      if (f !== cube.active) { cube.active = f; highlightCard(f); }
      requestAnimationFrame(frame);
    })();
  }


  const procSec = byId('proc');
  const procTrack = byId('track');

  function updateProcess() {
    const shift = -stickyProgress(procSec) * Math.max(0, procTrack.scrollWidth - innerWidth);
    procTrack.style.transform = 'translateX(' + shift + 'px)';
    Array.from(procTrack.children).forEach((card) => {
      const d = (card.offsetLeft + card.offsetWidth / 2 + shift - innerWidth / 2) / (innerWidth / 2);
      card.style.transform = 'perspective(1100px) translateY(' + (d * d * 90 - 40) + 'px) rotateZ(' + (d * 10) + 'deg) rotateY(' + (-d * 18) + 'deg) scale(' + (1 - Math.min(0.22, Math.abs(d) * 0.11)) + ')';
    });
  }


  const whereSec = byId('where');
  const whereGhost = byId('ghost');
  const whereTitle = $('.where h2');
  let lastScrollY = scrollY, scrollVelocity = 0, velocityTimer;

  function updateWhere() {
    const r = whereSec.getBoundingClientRect();
    const q = (innerHeight - r.top) / (innerHeight + r.height);
    whereGhost.style.transform = 'translate3d(' + (-q * 55) + '%,-50%,0)';
    scrollVelocity += (clamp(scrollY - lastScrollY, -40, 40) - scrollVelocity) * 0.3;
    lastScrollY = scrollY;
    whereTitle.style.setProperty('--v', scrollVelocity.toFixed(1));
    clearTimeout(velocityTimer);
    velocityTimer = setTimeout(() => whereTitle.style.setProperty('--v', 0), 120);   
  }


  function initMarquee() {
    const box = byId('mq');
    MARQUEE_ROWS.forEach((row) => {
      const text = row.join(' ✦ ') + ' ✦ ';
      box.insertAdjacentHTML('beforeend', '<div><span>' + text + '</span><span>' + text + '</span></div>');
    });
  }



  const worksSec = byId('works');
  const ring = byId('ring');
  const projList = byId('list');
  const projName = byId('lName'), projDesc = byId('lDesc'), projLink = byId('lLink');
  const STEP = 360 / PROJECTS.length;                                  
  const CARD_W = Math.min(300, innerWidth * 0.64);
  const RADIUS = Math.round(CARD_W / 2 / Math.tan(Math.PI / PROJECTS.length)) + 30;
  const projCards = [], projItems = [];
  let activeProject = -1, ringTiltX = 0, ringTiltY = 0;

  function worksRange() { return worksSec.offsetHeight - innerHeight; }
  function scrollToProject(i) {
    scrollTo({ top: worksSec.offsetTop + i / (PROJECTS.length - 1) * worksRange(), behavior: 'smooth' });
  }
  function initWorks() {
    PROJECTS.forEach((p, i) => {
      const card = document.createElement(p.url ? 'a' : 'div');
      card.className = 'card';
      if (p.url) { card.href = p.url; card.target = '_blank'; card.rel = 'noopener'; }
      card.style.background = 'hsl(' + (275 + p.hue % 40) + ' 34% 34%)';   // color si falta la imagen
      card.style.transform = 'rotateY(' + (i * STEP) + 'deg) translateZ(' + RADIUS + 'px)';
      card.innerHTML = '<img src="' + IMG_DIR + p.img + '" alt="" loading="lazy" onerror="this.remove()"><h3>' + p.name + '</h3><small></small>';
      ring.appendChild(card); projCards.push(card);

      const li = document.createElement('li'), btn = document.createElement('button');
      btn.textContent = p.name; btn.onclick = () => scrollToProject(i);
      li.appendChild(btn); projList.appendChild(li); projItems.push(li);
    });
    $('.stage').addEventListener('pointermove', (e) => {
      ringTiltY = (e.clientY / innerHeight - 0.5) * -6;
      ringTiltX = (e.clientX / innerWidth - 0.5) * 8;
      updateWorks();
    });
    refreshProjectTexts();
  }
  function setActiveProject(i) {
    if (i === activeProject) return;
    activeProject = i;
    const p = PROJECTS[i];
    projName.textContent = p.name;
    projDesc.textContent = p.desc[lang];
    if (p.url) { projLink.href = p.url; projLink.style.display = ''; } else projLink.style.display = 'none';
    projItems.forEach((li, k) => { li.className = k === i ? 'on' : ''; });
  }
 
  function refreshProjectTexts() {
    projCards.forEach((c, i) => { $('small', c).textContent = PROJECTS[i].cat[lang]; });
    activeProject = -1;
    updateWorks();
  }
  function updateWorks() {
    const angle = stickyProgress(worksSec) * (PROJECTS.length - 1) * STEP;
    ring.style.transform = 'translateZ(-' + RADIUS + 'px) rotateX(' + (-7 + ringTiltY) + 'deg) rotateY(' + (-angle + ringTiltX) + 'deg)';
    projCards.forEach((c, i) => {   
      const d = (i * STEP - angle) * Math.PI / 180;
      c.style.opacity = (0.18 + 0.82 * Math.pow(Math.max(0, Math.cos(d)), 1.5)).toFixed(2);
    });
    setActiveProject(Math.round(angle / STEP));
  }


  const tmSec = byId('testimonial');
  let tmSeen = false;

  function initTestimonial() {
    new IntersectionObserver((e) => { if (e[0].isIntersecting) { tmSeen = true; tmSec.classList.add('in'); } },
      { rootMargin: '0px 0px -15% 0px' }).observe(tmSec);
  }
  function renderTestimonial() {
    const t = TESTIMONIAL, demo = location.hash === '#testimonial-demo';
    let quote = t.quote[lang] || t.quote.en || t.quote.es, name = t.name, role = t.role;
    if (!quote && demo) {   
      quote = lang === 'es' ? 'Texto de ejemplo: aquí aparecerá el testimonio de tu jefe, con sus palabras reales.'
                            : 'Sample text: this is where your manager’s testimonial will appear, in their own words.';
      name = name || 'Name Surname'; role = role || (lang === 'es' ? 'Cargo' : 'Role');
    }
    if (!quote) { tmSec.hidden = true; return; }
    tmSec.hidden = false;
    const q = byId('tmq'); q.textContent = '';
    quote.split(' ').forEach((word, k) => {   
      const outer = document.createElement('span'), inner = document.createElement('span');
      outer.className = 'tw'; inner.style.setProperty('--k', k); inner.textContent = word;
      outer.appendChild(inner); q.appendChild(outer); q.appendChild(document.createTextNode(' '));
    });
    byId('tmi').textContent = name.split(' ').map((x) => x.charAt(0)).slice(0, 2).join('').toUpperCase();
    byId('tmn').textContent = name;
    byId('tmr').textContent = role + (t.company ? ' · ' + t.company : '');
    const link = byId('tml');
    if (t.linkedin) { link.href = t.linkedin; link.style.display = ''; } else link.style.display = 'none';
    if (tmSeen) tmSec.classList.add('in');
  }


  const talkSec = byId('talk');
  const talkTitle = byId('lt');
  const netCanvas = byId('cons');
  const netCtx = netCanvas.getContext('2d');
  const net = { w: 0, h: 0, points: [], mx: -999, my: -999, visible: false, running: false };
  let talkLetters = [];


  function buildTalkTitle(text) {
    let k = 0;
    talkTitle.setAttribute('aria-label', text);
    talkTitle.innerHTML = text.split(' ').map((word) =>
      '<span class="w">' + word.split('').map((ch) => '<span class="ch" aria-hidden="true" style="--k:' + (k++) + '">' + ch + '</span>').join('') + '</span>').join(' ');
    talkLetters = $$('.ch', talkTitle);
  }
  function sizeNet() {
    net.w = netCanvas.width = talkSec.clientWidth;
    net.h = netCanvas.height = talkSec.clientHeight;
    net.points = [];
    for (let i = 0, n = Math.round(net.w * net.h / 14000); i < n; i++)
      net.points.push([Math.random() * net.w, Math.random() * net.h, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5]);
  }
  function drawNet(t) {
    if (!net.visible) { net.running = false; return; }
    net.running = true;
    const c = netCtx, pts = net.points;
    c.clearRect(0, 0, net.w, net.h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p[0] += p[2]; p[1] += p[3];
      if (p[0] < 0 || p[0] > net.w) p[2] *= -1;
      if (p[1] < 0 || p[1] > net.h) p[3] *= -1;
      const dx = net.mx - p[0], dy = net.my - p[1], d = Math.hypot(dx, dy);
      if (d < 190) {                                   
        p[0] += dx / d * (1 - d / 190) * 1.6; p[1] += dy / d * (1 - d / 190) * 1.6;
        c.strokeStyle = 'rgba(232,214,248,' + (0.55 * (1 - d / 190)) + ')';
        c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(net.mx, net.my); c.stroke();
      }
      for (let j = i + 1; j < pts.length; j++) {       
        const q = pts[j], ex = p[0] - q[0], ey = p[1] - q[1], e2 = ex * ex + ey * ey;
        if (e2 < 12100) {
          c.strokeStyle = 'rgba(216,180,238,' + (0.38 * (1 - Math.sqrt(e2) / 110)) + ')';
          c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(q[0], q[1]); c.stroke();
        }
      }
      c.fillStyle = '#d8b4ee'; c.fillRect(p[0] - 1.5, p[1] - 1.5, 3, 3);
    }
    if (net.mx === -999)   
      talkLetters.forEach((l, i) => { l.style.transform = 'translateY(' + (Math.sin(t / 520 + i * 0.55) * 7) + 'px)'; });
    requestAnimationFrame(drawNet);
  }
  function initTalk() {
    addEventListener('resize', sizeNet);
    talkSec.addEventListener('pointermove', (e) => {
      if (isTouch(e)) return;
      const r = talkSec.getBoundingClientRect();
      net.mx = e.clientX - r.left; net.my = e.clientY - r.top;
      talkLetters.forEach((l) => {   
        const b = l.getBoundingClientRect();
        const dx = b.left + b.width / 2 - e.clientX, dy = b.top + b.height / 2 - e.clientY;
        const d = Math.hypot(dx, dy) || 1, k = Math.max(0, 1 - d / Math.min(280, innerWidth * 0.3));
        l.style.transform = 'translate(' + (dx / d * k * 50) + 'px,' + (dy / d * k * 50) + 'px) rotate(' + (dx / d * k * 24) + 'deg) scale(' + (1 + k * 0.28) + ')';
        l.style.textShadow = k > 0.05 ? (k * 12) + 'px 0 var(--red),' + (-k * 12) + 'px 0 var(--cyan)' : 'none';
      });
    });
    talkSec.addEventListener('pointerleave', () => {
      net.mx = -999;
      talkLetters.forEach((l) => { l.style.textShadow = 'none'; });
    });
    new IntersectionObserver((e) => {
      net.visible = e[0].isIntersecting;
      if (!net.visible) return;
      if (!net.w || Math.abs(net.w - talkSec.clientWidth) > 2 || Math.abs(net.h - talkSec.clientHeight) > 2) sizeNet();
      talkTitle.classList.add('rise');
      if (!net.running) requestAnimationFrame(drawNet);
    }).observe(talkSec);
  }



  const originals = new Map();

  function detectLang() {
    try { const saved = localStorage.getItem('lang'); if (saved) return saved; } catch (e) { /* sin acceso */ }
    return (navigator.language || '').slice(0, 2) === 'es' ? 'es' : 'en';
  }
  function translateTextNodes(target) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = n.parentElement;
        return (!parent || parent.closest(NO_TRANSLATE)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);   
      const original = originals.get(node), key = original.trim();
      const es = target === 'es' ? ES[key] : null;
      node.nodeValue = es ? original.replace(key, es) : original;
    });
  }
  function applyLang(target) {
    lang = target;
    document.documentElement.lang = target;
    translateTextNodes(target);
    byId('rtxt').innerHTML = target === 'es' ? 'Sobre<br>mí' : 'About<br>me';
    buildScrub(target === 'es' ? SCRUB_ES : SCRUB_EN);
    buildTalkTitle(target === 'es' ? 'Hablemos' : 'Let’s talk');
    resetTyper();
    refreshProjectTexts();
    setMenu(menuPanel.classList.contains('open'));
    const spans = $$('.lng span');                       
    spans[0].className = target === 'en' ? 'on' : '';
    spans[1].className = target === 'es' ? 'on' : '';
    document.title = target === 'es' ? 'Angélica Gómez | Desarrolladora Web WordPress y Shopify'
                                     : 'Angélica Gómez | WordPress, Shopify & Web Developer';
    try { localStorage.setItem('lang', target); } catch (e) { /* sin acceso */ }
    renderTestimonial();
    updateAll();
  }
  function initLang() {
    $('.lng').addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));
    applyLang(detectLang());
  }


  let scrollTicking = false;

  function updateAll() {
    updateProgressBar();   
    updateReveal();        
    updateScrub();         
    updateProcess();       
    updateWhere();         
    updateWorks();         
  }
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => { scrollTicking = false; updateAll(); });
  }


  function init() {
    initLoader();
    initNav();
    initCursor();
    initHero();
    initSwirl();
    initCounters();
    initPhoto();
    initTools();
    initWhy();
    initCube();
    initMarquee();
    initWorks();
    initTestimonial();
    initTalk();
    initLang();            
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
  }
  init();

})();
