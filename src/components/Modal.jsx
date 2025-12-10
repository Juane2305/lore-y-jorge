import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Copy, Check, CreditCard, X } from "lucide-react";

export const Modal = ({
  claseBoton,
  claseBotonModal,
  claseModal,
  borderModal,
  textColor,
  cbu,
  alias,
  banco,
  nombre,
  moneda_extranjera,
  tipo_cuenta,
  numero_cuenta,
  titular_extranjera,
  banco_extranjera,
  styleBotonModal,
  styleModal,
  styleBorderModal,
  styleTextColor,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const copiarTexto = (texto, field) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className={`py-4 px-8 border-2 rounded-full font-serif text-lg mt-5 transition-all duration-300 hover:scale-105 hover:shadow-xl ${claseBoton}`}
        style={styleBotonModal}
        data-aos='fade-up'
        onClick={() => setIsOpen(true)}
      >
        <CreditCard className="inline w-5 h-5 mr-2 -mt-1" />
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div 
          className={`fixed inset-0 ${claseModal} bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn`} 
          style={styleModal}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`bg-white p-6 md:p-10 rounded-2xl shadow-2xl border-2 ${borderModal} w-full max-w-lg md:max-w-xl transform transition-all duration-300 animate-slideUp`} 
            style={styleBorderModal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar superior */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col space-y-6 text-gray-900">
              
              {/* Título principal */}
              <div className="text-center mb-4">
                <CreditCard className="w-12 h-12 text-principal-dark mx-auto mb-3" />
                <h2 className="font-vintageText text-3xl md:text-4xl text-principal-dark">Datos Bancarios</h2>
                <div className="w-20 h-0.5 bg-gold mx-auto mt-3"></div>
              </div>

              {/* Datos en Pesos */}
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                <h3 className="text-lg font-semibold text-principal-dark border-b-2 border-principal-light/30 pb-2">
                  Datos en Pesos
                </h3>
              )}
              
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-principal-light/10 to-transparent rounded-lg p-4 border-l-4 border-principal-dark">
                  <p className="text-sm text-gray-600 mb-1">Nombre del titular</p>
                  <p className="font-serif text-lg text-gray-900">{nombre}</p>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-lg p-4 border-l-4 border-gold">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">Alias</p>
                      <p className="font-serif text-lg text-gray-900 break-all">{alias}</p>
                    </div>
                    <button 
                      onClick={() => copiarTexto(alias, 'alias')}
                      className="ml-3 p-2 hover:bg-gold/20 rounded-lg transition-all duration-200 flex-shrink-0"
                    >
                      {copiedField === 'alias' ? (
                        <Check className="w-5 h-5 text-green-600 animate-bounce" />
                      ) : (
                        <Copy className="w-5 h-5 text-gold" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-principal-light/10 to-transparent rounded-lg p-4 border-l-4 border-principal-dark">
                  <p className="text-sm text-gray-600 mb-1">Banco</p>
                  <p className="font-serif text-lg text-gray-900">{banco}</p>
                </div>
              </div>

              {/* Datos en moneda extranjera */}
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <h3 className="text-lg font-semibold text-principal-dark border-b-2 border-principal-light/30 pb-2 mb-4">
                    Datos en {moneda_extranjera}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-lg p-4 border-l-4 border-gold">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 mb-1">{tipo_cuenta}</p>
                          <p className="font-serif text-lg text-gray-900 break-all">{numero_cuenta}</p>
                        </div>
                        <button 
                          onClick={() => copiarTexto(numero_cuenta, 'cuenta')}
                          className="ml-3 p-2 hover:bg-gold/20 rounded-lg transition-all duration-200 flex-shrink-0"
                        >
                          {copiedField === 'cuenta' ? (
                            <Check className="w-5 h-5 text-green-600 animate-bounce" />
                          ) : (
                            <Copy className="w-5 h-5 text-gold" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-principal-light/10 to-transparent rounded-lg p-4 border-l-4 border-principal-dark">
                      <p className="text-sm text-gray-600 mb-1">Titular</p>
                      <p className="font-serif text-lg text-gray-900">{titular_extranjera}</p>
                    </div>

                    <div className="bg-gradient-to-r from-principal-light/10 to-transparent rounded-lg p-4 border-l-4 border-principal-dark">
                      <p className="text-sm text-gray-600 mb-1">Banco</p>
                      <p className="font-serif text-lg text-gray-900">{banco_extranjera}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Botón cerrar */}
              <button
                className={`w-full py-4 rounded-full text-white font-serif text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mt-6`}
                style={claseBotonModal}
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};