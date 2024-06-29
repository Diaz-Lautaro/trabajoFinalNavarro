import React, { useState, useEffect } from 'react';

import './estilo.css';

// Importación de imágenes
import rest1 from './imgGastronomia/bar1.jpg';
import rest2 from './imgGastronomia/bar2.jpg';
import rest3 from './imgGastronomia/bar3.jpg';
import rest4 from './imgGastronomia/bar4.jpg';
import turis1 from './imgTurismo/turismo1.jpeg';
import turis2 from './imgTurismo/turismo2.jpg';
import turis3 from './imgTurismo/turismo3.jpg';
import turis4 from './imgTurismo/turismo4.jpg';
import hospe1 from './imgHospedaje/hospedaje1.jpg';
import hospe2 from './imgHospedaje/hospedaje2.jpg';
import hospe3 from './imgHospedaje/hospedaje3.jpg';
import hospe4 from './imgHospedaje/hospedaje4.jpeg';
import atracc1 from './imgAtracciones/atraccion1.jpg';
import atracc2 from './imgAtracciones/atraccion2.jpg';
import atracc3 from './imgAtracciones/atraccion3.jpg';
import atracc4 from './imgAtracciones/atraccion4.jpg';

function App() {

  //===================================================================================
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleUserInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = { text: inputText, sender: 'user' };
    setMessages([...messages, newMessage, { sender: 'bot' }]);
    setInputText('');

    // Check for specific questions and generate bot responses
    handleBotResponses(inputText.toLowerCase());
  };

  const handleBotResponses = (input) => {
    if (input.includes('lugares para cenar')) {
      const responseMessage = 'Aquí tienes algunos lugares recomendados para cenar en San Miguel de Tucumán:\n\n1. El Club de la Milanesa: Ofrece una variedad de milanesas gourmet y platos tradicionales argentinos en un ambiente acogedor.\n\n2. La Parolaccia Trattoria: Especializado en cocina italiana, perfecto para disfrutar de pastas caseras y sabores auténticos.\n\n3. Chicoana Restaurant: Conocido por su excelente carne a la parrilla y una amplia carta de vinos locales.\n\n4. Manjares de la Tierra: Ofrece cocina gourmet con ingredientes locales frescos y menús de degustación.\n\n5. El Molino Central: Ideal para disfrutar de platos típicos tucumanos como empanadas y locro en un ambiente histórico.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else if (input.includes('lugares para almorzar')) {
      const responseMessage = 'Estos son algunos lugares ideales para almorzar en San Miguel de Tucumán:\n\n1. Plaza Cervecería: Ofrece una combinación de cocina regional y platos internacionales en un ambiente moderno y relajado.\n\n2. La Bohème Restó: Especializado en cocina gourmet con menús de almuerzo ejecutivo y una excelente selección de vinos.\n\n3. Al Pan Pan: Conocido por sus opciones de sandwiches y ensaladas frescas con ingredientes locales.\n\n4. La Paisanita: Restaurante familiar que ofrece comida casera tucumana con opciones vegetarianas y veganas.\n\n5. La Posta de Tucumán: Destacado por sus parrillas y carnes a la brasa, perfecto para un almuerzo tradicional argentino.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else if (input.includes('lugares para desayunar')) {
      const responseMessage = 'Aquí tienes recomendaciones de lugares para desayunar en San Miguel de Tucumán:\n\n1. La Tucumanita: Conocido por sus tamales y empanadas tucumanas recién hechas en un ambiente acogedor.\n\n2. Almacén de Café: Ofrece una amplia variedad de cafés y opciones de desayuno con productos locales frescos.\n\n3. Chai Tea & Coffee: Especializado en tés y cafés gourmet con opciones saludables y vegetarianas para el desayuno.\n\n4. Las Delicias: Tradicional cafetería que ofrece medialunas y tortas caseras junto con café recién hecho.\n\n5. Kusko Coffee Bar: Ideal para desayunar con opciones de café de especialidad y brunch con ingredientes locales.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else if (input.includes('lugares para merendar')) {
      const responseMessage = 'Te recomiendo algunos lugares para merendar en San Miguel de Tucumán:\n\n1. San Miguel Plaza: Centro comercial con opciones de cafeterías y heladerías para disfrutar de meriendas dulces y saladas.\n\n2. Ñam Ñam: Ofrece opciones saludables y caseras como wraps, sandwiches y jugos naturales para la merienda.\n\n3. La Hostería: Conocida por sus tortas y dulces caseros, perfectos para una merienda tradicional.\n\n4. The Coffee Store: Especializado en café de especialidad y opciones gourmet para acompañar con tartas y pastelería artesanal.\n\n5. Cielito Lindo: Heladería artesanal con opciones de helados y postres para disfrutar en la tarde.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else if (input.includes('lugares para pasar la noche')) {
      const responseMessage = 'Aquí tienes recomendaciones de lugares donde puedes hospedarte en San Miguel de Tucumán:\n\n1. Hotel Hilton Garden Inn Tucumán: Hotel moderno con comodidades de lujo y ubicación céntrica.\n\n2. Sheraton Tucumán Hotel: Ofrece vistas panorámicas y servicios de spa y bienestar.\n\n3. Hotel Francia: Ubicado en el centro histórico, con encanto colonial y servicios completos.\n\n4. Amérian Tucumán Apart & Suites: Apartamentos con cocina completa y servicios de hotel en el corazón de la ciudad.\n\n5. Hotel Carlos V: Conocido por su hospitalidad y ubicación estratégica cerca de atracciones principales.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else if (input.includes('recomendame una ruta para recorrer tucuman')) {
      const responseMessage = 'Te recomiendo esta ruta para explorar Tucumán: Visita a la Casa Histórica de la Independencia en San Miguel de Tucumán, donde se declaró la independencia de Argentina.\n\n2. Recorrido por los Valles Calchaquíes, visitando pueblos como Cafayate y Cachi, conocidos por sus bodegas y paisajes impresionantes.\n\n3. Excursión al Parque Nacional El Cadillal para disfrutar de la naturaleza y actividades al aire libre.\n\n4. Paseo por el Cerro San Javier para vistas panorámicas y observación de aves.\n\n5. Visita al Museo Folklórico Provincial para explorar la cultura local y festivales.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    } else {
      const responseMessage = 'Lo siento, no entiendo esa petición.';
      const botMessage = { text: responseMessage, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
    }
  };

  const handleMenuOption = (option) => {
    const responseMessage = generateResponseForOption(option);
    const botMessage = { text: responseMessage, sender: 'bot' };
    setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
  };

  const generateResponseForOption = (option) => {
    switch (option) {
      case 'Naturaleza':
        return 'Para los amantes de la naturaleza, te recomiendo explorar Tucumán visitando el Parque Nacional El Cadillal para disfrutar de sus paisajes naturales y actividades al aire libre. También puedes explorar el Cerro San Javier, ideal para observar aves y tener vistas panorámicas. Otra opción es el Parque Sierra de San Javier, perfecto para hacer senderismo y disfrutar de la flora y fauna local.';
      case 'Ciudades':
        return 'Si te interesan las ciudades, no te pierdas San Miguel de Tucumán, la capital de la provincia, famosa por su arquitectura colonial y sitios históricos como la Casa Histórica de la Independencia y la Catedral de San Miguel. También puedes visitar Yerba Buena, conocida por sus parques y espacios verdes.';
      case 'Pueblos':
        return 'Los pueblos de Tucumán ofrecen una experiencia única. Recomiendo visitar Tafí del Valle, un encantador pueblo de montaña con vistas espectaculares y actividades al aire libre como trekking y cabalgatas. Otro pueblo interesante es Amaicha del Valle, famoso por su cultura y el Museo Pachamama.';
      case 'Circuitos':
        return 'Los circuitos turísticos en Tucumán son una excelente manera de explorar la diversidad de la provincia. Considera hacer el Circuito de los Valles Calchaquíes, que te llevará a través de paisajes impresionantes y pueblos pintorescos como Cafayate y Cachi. También puedes explorar el Circuito de las Yungas, ideal para observar la biodiversidad de la región.';
      case 'Cultura':
        return 'Para los interesados en la cultura, Tucumán ofrece una rica historia y patrimonio. Visita la Casa Histórica de la Independencia en San Miguel de Tucumán, donde se declaró la independencia de Argentina en 1816. También puedes explorar el Museo Folklórico Provincial y disfrutar de festivales culturales durante todo el año.';
      default:
        return 'No entiendo esa opción.';
    }
  };

  // Mensaje inicial del chatbot
  useEffect(() => {
    setMessages([{ text: 'Puedo ayudarte con información turística sobre Tucumán. ¿Qué te gustaría saber?.', sender: 'bot' }]);
  }, []);

  const handleClearChat = () => {
    setMessages([{ text: 'Puedo ayudarte con información turística sobre Tucumán. ¿Qué te gustaría saber?.', sender: 'bot' }]);
  };
  //=================================================================================== 






  const [cajaSeleccionada, setCajaSeleccionada] = useState(null);
  const [mostrarCajaNueva, setMostrarCajaNueva] = useState(false);
  const [imagenesMostradas, setImagenesMostradas] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
  };

  const handleClickCaja = (nombreCaja) => {
    if (nombreCaja === cajaSeleccionada) {
      setMostrarCajaNueva(!mostrarCajaNueva); // Alternar visibilidad si se hace clic en la misma caja
    } else {
      setCajaSeleccionada(nombreCaja);
      setMostrarCajaNueva(true); // Mostrar la nueva caja al hacer clic en una diferente

      switch (nombreCaja) {
        case "Lugares turísticos":
          setImagenesMostradas([
            { src: turis1, link: 'https://www.tripadvisor.com.ar/Attractions-g312827-Activities-Tafi_del_Valle_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'Tafí del Valle es un pintoresco pueblo ubicado en el noroeste de Tucumán, es un destino ideal para los amantes de la naturaleza y aquellos que buscan tranquilidad.' },
            { src: turis2, link: 'https://www.minube.com.ar/rincon/catedral-de-tucuman-a66889', descripcion: 'La Catedral de San Miguel de Tucumán es un monumento histórico ubicado en el centro de la ciudad de San Miguel de Tucumán, en Argentina. Construida durante el siglo XVIII, es un ejemplo destacado de la arquitectura colonial española en la región.' },
            { src: turis3, link: 'https://www.tripadvisor.com.ar/Attraction_Review-g312826-d2060572-Reviews-Casa_Historica_de_Tucuman-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Arge.html', descripcion: 'La Casa Histórica de Tucumán es un símbolo de gran importancia para Argentina, ya que en ella se llevó a cabo la histórica declaración de la independencia el 9 de julio de 1816. Este edificio colonial ubicado en el centro de San Miguel de Tucumán es ahora un museo que recrea el ambiente de aquel momento trascendental en la historia del país. Los visitantes pueden explorar sus salas y galerías, llenas de artefactos históricos y documentos relacionados con el proceso de independencia.' },
            { src: turis4, link: 'https://www.tripadvisor.com.ar/Tourism-g676356-San_Javier_Province_of_Tucuman_Northern_Argentina-Vacations.html', descripcion: 'El Cerro San Javier es una montaña cerca de San Miguel de Tucumán, Argentina, famosa por sus vistas panorámicas y actividades al aire libre como senderismo y ciclismo. Es un destino popular para disfrutar del paisaje y observar el amanecer o el atardecer.s' }
          ]);
          break;

        case "Hospedaje":
          setImagenesMostradas([
            { src: hospe1, link: 'https://www.marriott.com/es/hotels/tucsi-sheraton-tucuman-hotel/overview/', descripcion: 'El Hotel Sheraton en Tucumán es una opción de alojamiento de lujo en el corazón de la ciudad. Conocido por su elegancia y comodidades de primera clase, ofrece a los huéspedes una experiencia de hospedaje de alto nivel, con habitaciones confortables, servicios exclusivos y una ubicación conveniente para explorar los atractivos turísticos cercanos.' },
            { src: hospe2, link: 'http://www.hotelsolsanjavier.com.ar/', descripcion: 'El Hotel Sol San Javier es un destino popular en Tucumán, Argentina, ubicado en las laderas del Cerro San Javier. Ofrece a los huéspedes una experiencia única con vistas impresionantes de las montañas y el entorno natural. Es conocido por su ambiente relajante, piscinas al aire libre, y opciones de actividades como senderismo y observación de aves, ideal para quienes buscan tranquilidad y contacto con la naturaleza.' },
            { src: hospe3, link: 'https://hotelgardenplaza.com.ar/?gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv9GErzY6EODtbcaO_Q8UFi--aKJiL2kmDwiyGKGNXTE5nwr4fDsKsBoCKKMQAvD_BwE#!/-hoteltucuman/', descripcion: 'El Garden Plaza Hotel en Tucumán es reconocido por su estilo contemporáneo y comodidades modernas. Ubicado estratégicamente en el centro de la ciudad, ofrece a los huéspedes fácil acceso a atracciones locales y negocios. Con habitaciones bien equipadas, servicios de calidad y espacios para eventos, es una opción popular tanto para turistas como para viajeros de negocios que buscan confort y conveniencia durante su estadía en Tucumán.' },
            { src: hospe4, link: 'https://www.hotelbicentenario.com.ar/', descripcion: 'El Hotel Bicentenario en Tucumán es un establecimiento moderno y elegante que celebra la rica historia y cultura de Argentina. Situado en una ubicación céntrica, combina comodidades contemporáneas con detalles que honran el patrimonio nacional. Ofrece habitaciones confortables, servicios de calidad y una atención personalizada, siendo una opción ideal para quienes desean explorar la ciudad y sus alrededores desde un punto de partida cómodo y acogedor.' }
          ]);
          break;

        case "Atracciones":
          setImagenesMostradas([
            { src: atracc1, link: 'https://www.tripadvisor.com.ar/Attraction_Review-g312826-d3367400-Reviews-Aerosillas_El_Cadillal-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argenti.html', descripcion: 'Las aerosillas del Cadillal son una atracción turística en Tucumán, Argentina, que permite a los visitantes disfrutar de vistas panorámicas espectaculares mientras ascienden por las laderas del embalse El Cadillal. Es una experiencia popular para familias y amantes de la naturaleza, ofreciendo la oportunidad de observar el paisaje montañoso y el agua cristalina desde una perspectiva única y relajante.' },
            { src: atracc2, link: 'https://www.lillo.org.ar/museo-lillo-de-ciencias-naturales', descripcion: 'El Museo Miguel Lillo es un destacado centro cultural y científico en San Miguel de Tucumán, Argentina. Fundado por el naturalista y científico Miguel Lillo, alberga una impresionante colección de especies de flora y fauna de la región, así como exhibiciones sobre geología y paleontología. Es un lugar ideal para aprender sobre la biodiversidad local y la historia natural de la zona, ofreciendo a los visitantes una experiencia educativa y enriquecedora.' },
            { src: atracc3, link: 'https://www.reservahorcomolle.com.ar/', descripcion: 'La Reserva Natural Horco Molle es un santuario ecológico ubicado en Tucumán, Argentina, conocido por su biodiversidad y belleza natural. Ofrece a los visitantes la oportunidad de explorar senderos entre bosques nativos, observar una variedad de aves y disfrutar de cascadas y arroyos cristalinos. Es un destino ideal para actividades al aire libre como el trekking y el avistamiento de vida silvestre, proporcionando un escape tranquilo y rejuvenecedor en medio de la naturaleza.' },
            { src: atracc4, link: 'https://www.rakitucuman.com/?utm_source=google&utm_medium=BD&utm_campaign=BD0124&utm_id=BD0124&utm_term=parqueaereo&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv9bKYunShnoXSB8UWDER1uOE9hvAH_U1iZn31MPfbJxKvT05qAPjsBoCOUMQAvD_BwE', descripcion: 'Rakitucumán es un parque temático y de aventuras ubicado en San Miguel de Tucumán, Argentina. Ofrece una variedad de actividades recreativas y deportivas al aire libre, como tirolesa, escalada en roca, y circuitos de cuerdas altas y bajas. Es un lugar popular para familias y grupos que buscan diversión y adrenalina en un entorno natural seguro y bien equipado.' }
          ]);
          break;

        case "Restaurantes":
          setImagenesMostradas([
            { src: rest1, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d4213209-Reviews-Mora_Bistro_Argentino-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentin.html', descripcion: 'El Bar Mora Bistro es un establecimiento gastronómico ubicado en Tucumán, Argentina, conocido por su ambiente acogedor y su propuesta culinaria variada. Ofrece una combinación de platos locales e internacionales, destacándose por sus opciones de cocina creativa y su atención personalizada. Es un lugar ideal tanto para disfrutar de una comida tranquila como para socializar en un ambiente relajado y moderno.' },
            { src: rest2, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d14763439-Reviews-Los_Naranjos-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar Los Naranjos es un conocido establecimiento en Tucumán, Argentina, reconocido por su ambiente animado y su oferta de bebidas y comidas. Es un lugar popular tanto entre locales como turistas, ideal para disfrutar de tragos variados, música en vivo y una atmósfera vibrante. Ofrece también opciones de comida rápida y snacks, convirtiéndolo en un punto de encuentro popular en la ciudad.' },
            { src: rest3, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d3833868-Reviews-Il_Postino-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar El Postino es un encantador establecimiento en Tucumán, Argentina, conocido por su ambiente acogedor y su estilo único inspirado en la cultura italiana. Es famoso por sus selecciones de vinos y cócteles, así como por su oferta gastronómica que incluye tapas y platos gourmet. Es un lugar ideal para disfrutar de una velada tranquila con amigos o pareja, combinando buena música y una excelente atención.' },
            { src: rest4, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d3371177-Reviews-El_PORTAL-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar El Portal es un popular punto de encuentro en Tucumán, Argentina, conocido por su ambiente animado y su variada oferta de bebidas y comida. Es reconocido por su atención amigable y por ser un lugar ideal tanto para disfrutar de tragos con amigos como para socializar en un ambiente relajado.' }
          ]);
          break;

        default:
          setImagenesMostradas([]);
          break;
      }

      setMenuVisible(false); // Cerrar el menú al seleccionar una categoría
    }
  };

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleVolverClick = () => {
    setCajaSeleccionada(null);
    setMostrarCajaNueva(false);
    setImagenesMostradas([]);
  };

  const handleSobreNosotrosClick = () => {
    setCajaSeleccionada("Sobre Nosotros");
    setMostrarCajaNueva(true);
    setImagenesMostradas([]);
    setMenuVisible(false); // Cerrar el menú al seleccionar "Sobre Nosotros"
  };

  const handleresenasClick = () => {
    setCajaSeleccionada("Reseñas");
    setMostrarCajaNueva(true);
    setImagenesMostradas([]);
    setMenuVisible(false); // Cerrar el menú al seleccionar "Reseñas"
  };

  const handleAjustesClick = () => {
    setCajaSeleccionada("Ajustes");
    setMostrarCajaNueva(true);
    setImagenesMostradas([]);
    setMenuVisible(false); // Cerrar el menú al seleccionar "Ajustes"
  };

  const sobreNosotrosText = `¡Bienvenido a nuestro mundo de la programación!
Somos un equipo formado por tres apasionados estudiantes de programación unidos por nuestra 
curiosidad y amor a la tecnología. Nuestros nombres son Malena, Lautaro y Facundo. Juntos, 
estamos emocionados de compartir nuestro conocimiento y experiencia a través de esta plataforma.

Como estudiantes de programación, hemos dedicado horas a dominar el lenguaje de JavaScript, 
y nos encanta explorar nuevas tecnologías emergentes como inteligencia artificial y desarrollo web.
Nuestra formación académica en la Universidad Tecnológica Nacional, nos ha equipado con las 
bases sólidas necesarias para enfrentar desafíos técnicos complejos.

Nos destacamos por nuestra capacidad para trabajar en equipo y nuestra pasión por la innovación.
Creemos firmemente en la importancia de la calidad del código y la experiencia del usuario. 
Cada proyecto que emprendemos es una oportunidad para mejorar nuestras habilidades y ofrecer 
soluciones creativas y efectivas. Nuestra misión con esta página web es proporcionar una plataforma 
intuitiva y útil para entusiastas de la tecnología y programación. Nos comprometemos a mantener 
altos estándares de excelencia y a seguir aprendiendo y mejorando continuamente.

¡Únete a nosotros en este viaje! Estamos emocionados por el futuro y esperamos expandir nuestros 
horizontes junto a nuestra creciente comunidad de desarrolladores y aficionados a la tecnología.
`;

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="estilo.css" />
        <title>Explora Tuc</title>
      </head>
      <body>
        <nav>
          <div className="nav-left">
            <h1>Explora Tuc</h1>
          </div>
          <details className="contOp" open={menuAbierto}>
            <summary onClick={handleMenuClick}>Menú</summary>
            <ul className={`rtl ${menuVisible ? 'visible' : 'oculto'}`}>
              <li onClick={handleresenasClick}><a href="#">Reseñas</a></li>
              <li onClick={() => handleClickCaja("Ayuda")}><a href="#">Ayuda</a></li>
              <li onClick={handleSobreNosotrosClick}><a href="#">Sobre Nosotros</a></li>
              <li onClick={handleAjustesClick}><a href="#">Ajustes</a></li>
            </ul>
          </details>
        </nav>

        <main>
          {cajaSeleccionada && (
            <div className={`caja-nueva ${mostrarCajaNueva ? 'visible' : 'oculto'}`}>
              <h2>{cajaSeleccionada}</h2>
              <button className='btnVolver' onClick={handleVolverClick}>Volver</button>
              {cajaSeleccionada === "Sobre Nosotros" ? (
                <div className="sobre-nosotros">
                  <p>{sobreNosotrosText}</p>
                </div>
              ) : cajaSeleccionada === "Ajustes" ? (
                <div className='Login'>
                  <h2 className='title'>INICIO DE SESIÓN</h2>
                  <form className="login-form" onSubmit={handleLoginSubmit}>
                    <div className='elemento'>
                      <label className='user' htmlFor='usuario'>Usuario</label>
                      <input
                        type="text"
                        placeholder="Ej: Ronaldo123"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                      />
                    </div>

                    <div className='elemento'>
                      <label className='pasw' htmlFor="contrasena">Contraseña</label>
                      <input
                        type="password"
                        placeholder="Ej: Sanchez321"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                      />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className='elemento' id="btninciar">
                      <button className='btnIniciar' type="submit">Iniciar</button>
                    </div>
                  </form>
                </div>
              ) : cajaSeleccionada === "Reseñas" ? (
                <div className="contenedor-tarjetas">

                  <div className='btnreseña'>
                    <button className='btnañadirReseña' type="submit">Añadir reseña</button>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Casa historíca</h2>
                    <p className="descripcion">Conocer nuestra historia no tiene precio. Increíble lugar...fui muchas veces siempre salgo sorprendido.</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Catedral</h2>
                    <p className="descripcion">Un templo de Dios muy bien cuidado y limpio</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Garden plaza</h2>
                    <p className="descripcion">Realmente es un lugar mágico. La atención de todo el personal es increíble, muy cálido y amable. Súper recomendable. Gran experiencia. Las instalaciones son soñadas. Recomiendo el circuito de relax y el gimnasio. Las vistas son postales.</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Sheraton</h2>
                    <p className="descripcion">Excelente ubicación. Habitaciones hermosas. Personal siempre bien dispuesto.</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Aerosillas el cadillal</h2>
                    <p className="descripcion">Excelente lugar para pasear.....los mejores sándwich de milanesa.....</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Reserva de horco molle</h2>
                    <p className="descripcion">Hermoso lugar para hacer excursiones tanto para adultos como para niños. Se pueden visitar especies autóctonas y el lugar al pie de cerro es bellísimo. En las cercanías se puede pasear en bicicleta o hacer caminatas muy agradables. Lugar obligado para conocer en Tucumán.</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Mora Bistro</h2>
                    <p className="descripcion">Platos abundantes y gourmet, buena atención, el lugar es amplio y cómodo.
                      A excepción de que la empanada tenía de más aceitunas, estuvo todo bien 😁🙂</p>
                  </div>
                  <div className="tarjeta">
                    <h2 className="titulo">Bar el portal</h2>
                    <p className="descripcion">muy rico todo exelentes papas y  el chivito sigo sin comer otro igual de rico!</p>
                  </div>
                </div>
              ) : cajaSeleccionada === "Ayuda" ? (
                <div className="chatbot-container">
                  <h2>Cuales son tus ámbitos preferidos</h2>
                  <div className="options-area">
                    <button className='btnop' onClick={() => handleMenuOption('Naturaleza')}>Naturaleza</button>
                    <button className='btnop' onClick={() => handleMenuOption('Ciudades')}>Ciudades</button>
                    <button className='btnop' onClick={() => handleMenuOption('Pueblos')}>Pueblos</button>
                    <button className='btnop' onClick={() => handleMenuOption('Circuitos')}>Circuitos</button>
                    <button className='btnop' onClick={() => handleMenuOption('Cultura')}>Cultura</button>
                  </div>

                  <div className="message-area">
                    {messages.map((message, index) => (
                      <div key={index}>{message.text}</div>
                    ))}
                  </div>

                  <div className="input-area">
                    <input
                      type="text"
                      value={inputText}
                      onChange={handleUserInput}
                      placeholder="Escribe aquí..."
                    />
                    <button onClick={handleSendMessage}>Enviar</button>
                  </div>

                  <div className="clear-chat-btn">
                    <button onClick={handleClearChat}>Limpiar Chat</button>
                  </div>
                </div>
              ) : (
                <section>
                  {imagenesMostradas.map((imagen, index) => (
                    <div key={index} className="image-container">
                      <a href={imagen.link} target="_blank" rel="noopener noreferrer">
                        <img src={imagen.src} alt={imagen.descripcion} />
                      </a>
                      <p className="description">{imagen.descripcion}</p>
                    </div>
                  ))}
                </section>
              )}
            </div>
          )}

          {!cajaSeleccionada && (
            <>
              <div className="fila">
                <div className="caja1" onClick={() => handleClickCaja("Lugares turísticos")}>
                  <h2>Lugares turísticos</h2>
                </div>
                <div className="caja2" onClick={() => handleClickCaja("Hospedaje")}>
                  <h2>Hospedaje</h2>
                </div>
              </div>
              <div className="fila">
                <div className="caja3" onClick={() => handleClickCaja("Atracciones")}>
                  <h2>Atracciones</h2>
                </div>
                <div className="caja4" onClick={() => handleClickCaja("Restaurantes")}>
                  <h2>Restaurantes</h2>
                </div>
              </div>
            </>
          )}
        </main>

        <footer>
          <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados a Messi.</p>
        </footer>
      </body>
    </html>
  );
}

export default App;
