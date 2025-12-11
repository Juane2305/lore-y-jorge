import rings from '../assets/rings.svg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPin, Car, Phone, Heart, Church, PartyPopper } from 'lucide-react';

const Places = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className='w-full py-16 flex flex-col items-center gap-y-12 bg-linear-to-b from-white to-principal-light/5'>
      {/* Título Principal */}
      <div className='flex flex-col items-center gap-y-4' data-aos='fade-down'>
        <img src={rings} alt="Anillos" className='size-32'/>
        <h2 className='text-center font-vintageText text-3xl md:text-4xl tracking-wider text-principal-dark'>
          NUESTRO GRAN DÍA
        </h2>
        <div className='w-20 h-0.5 bg-gold'></div>
      </div>

      {/* Cronograma de eventos */}
      <div className='w-full max-w-3xl px-6' data-aos='fade-up'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          
          {/* Civil */}
          <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-principal-dark transform hover:scale-105 transition-transform duration-300'>
            <div className='flex flex-col items-center gap-3'>
              <Heart className='w-10 h-10 text-principal-dark' />
              <h3 className='font-vintageText text-2xl text-principal-dark'>Civil</h3>
              <div className='w-12 h-0.5 bg-gold'></div>
              <p className='font-serif text-3xl text-gold font-semibold'>18:30</p>
              <p className='font-light text-gray-600 text-sm'>hs</p>
            </div>
          </div>

          {/* Ceremonia */}
          <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-gold transform hover:scale-105 transition-transform duration-300'>
            <div className='flex flex-col items-center gap-3'>
              <Church className='w-10 h-10 text-gold' />
              <h3 className='font-vintageText text-2xl text-principal-dark'>Ceremonia</h3>
              <div className='w-12 h-0.5 bg-gold'></div>
              <p className='font-serif text-3xl text-gold font-semibold'>19:00</p>
              <p className='font-light text-gray-600 text-sm'>hs</p>
            </div>
          </div>

          {/* Fiesta */}
          <div className='bg-white rounded-xl shadow-md p-6 border-t-4 border-principal-dark transform hover:scale-105 transition-transform duration-300'>
            <div className='flex flex-col items-center gap-3'>
              <PartyPopper className='w-10 h-10 text-principal-dark' />
              <h3 className='font-vintageText text-2xl text-principal-dark'>Fiesta</h3>
              <div className='w-12 h-0.5 bg-gold'></div>
              <p className='font-serif text-3xl text-gold font-semibold'>20:00</p>
              <p className='font-light text-gray-600 text-sm'>hs</p>
            </div>
          </div>

        </div>
      </div>

      {/* Dirección del evento */}
      <div className='max-w-2xl px-6' data-aos='zoom-in'>
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-principal-light/20'>
          <div className='flex items-start gap-4 mb-6'>
            <MapPin className='w-8 h-8 text-principal-dark shrink-0 mt-1' />
            <div>
              <h3 className='font-vintageText text-2xl text-principal-dark mb-3'>
                Dirección
              </h3>
              <p className='font-serif text-lg text-gray-700 leading-relaxed'>
                Calles Caña de Azúcar y La Soja<br />
                <span className='text-base text-gray-600'>
                  Barrio Colonia Rural Nueva Esperanza<br />
                  (Propiedad Familiar)
                </span>
              </p>
            </div>
          </div>

          {/* Separador decorativo */}
          <div className='flex items-center gap-3 my-8'>
            <div className='flex-1 h-px bg-linear-to-r from-transparent via-gold to-transparent'></div>
            <div className='w-2 h-2 bg-gold rounded-full'></div>
            <div className='flex-1 h-px bg-linear-to-r from-gold via-gold to-transparent'></div>
          </div>

          {/* Opciones de acceso */}
          <div className='space-y-6'>
            <h4 className='font-vintageText text-xl text-principal-dark text-center mb-6'>
              Información de Acceso
            </h4>
            
            {/* Opción 1: Vehículo */}
            <div className='flex items-start gap-4 bg-principal-dark/5 rounded-xl p-5 border-l-4 border-principal-dark'>
              <Car className='w-6 h-6 text-principal-dark flex-shrink-0 mt-1' />
              <div>
                <p className='font-semibold text-principal-dark mb-2'>
                  Si llegas en vehículo
                </p>
                <p className='font-light text-gray-700'>
                  Estacionamiento e ingreso por <span className='font-semibold'>calle La Mandioca (La Escaloneta)</span>
                </p>
              </div>
            </div>

            {/* Opción 2: Taxi/Uber */}
            <div className='flex items-start gap-4 bg-gold/10 rounded-xl p-5 border-l-4 border-gold'>
              <Phone className='w-6 h-6 text-gold flex-shrink-0 mt-1' />
              <div>
                <p className='font-semibold text-principal-dark mb-2'>
                  Si llegas en Taxi/Uber
                </p>
                <p className='font-light text-gray-700'>
                  Ingreso por <span className='font-semibold'>calle Caña de Azúcar</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Google Maps (opcional) */}
      <button 
        className='bg-principal-dark hover:bg-principal-dark/90 text-white font-serif px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105'
        data-aos='fade-up'
        onClick={() => window.open('https://maps.app.goo.gl/2Xp9rgLQxVsFPNZj6', '_blank')}
      >
        Ver en Google Maps
      </button>
        
    </div>
  )
}

export default Places