import { Shirt } from 'lucide-react'

const DressCodeVintage = ({dress_code}) => {
    return (
      <div className="bg-white p-8 rounded-xl max-w-lg mx-auto text-center">
        
        <Shirt className="w-12 h-12 text-principal-dark mx-auto mb-4" />
        
        <h2 className="font-vintageText text-3xl text-principal-dark mb-4">
          Código de Vestimenta
        </h2>
        
        <p className="font-serif text-xl text-gray-700 mb-6">
          {dress_code}
        </p>

        <div className="w-16 h-px bg-gold mx-auto mb-4"></div>

        <p className="font-light text-gray-600 leading-relaxed">
          <span className="font-semibold text-principal-dark">Calzado:</span> Mujeres, aconsejamos tacones anchos o zapatos planos perfectos para el césped
        </p>

      </div>
    );
  };

  export default DressCodeVintage;