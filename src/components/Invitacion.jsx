

import cancion from '../assets/song.mp3'
import CountdownCircles from "./CountdownCircles";
import Lugares from "./Lugares";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCodeVintage from "./DressCodeVintage";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "../components/Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import hojasVerdes2 from "../assets/hojasVerdes2.svg";
import hojasVerdesIzq from "../assets/hojasVerdesIzq.svg";
import GalleryVintage from "./GalleryVintage";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {

  const targetDate = new Date("2026-02-15T18:00:00-03:00");

  const colorPrincipal =  "#faf3e0"
  const colorSecundario =  "#faf3e0"



  return (
    <div className="w-full font-vintageText relative overflow-hidden bg-[#FAF3E0]">
      <div className="fixed inset-0 -z-10 bg-[url('/img/fondo.jpg')] bg-cover bg-center"></div>
      <div className="fixed top-4 right-4 z-50">
      </div>

        <div className="absolute">
          <MusicScreen cancion={cancion}/>
        </div>

      <div className="flex flex-col justify-center items-center h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740755815/Disen%CC%83o_Elegante_gem3ut_xq0rzs.webp')] bg-cover bg-no-repeat bg-center border-b-2 border-[#D4AF37] relative">
      <h1 className="text-6xl md:text-8xl  text-gold z-10 italic">
          Lore & Jorge
        </h1>
        <p className="mt-8 text-2xl text-lime-900">15 . 02 . 2026</p>
      </div>

      <div className="relative z-10">
          <section
            id="contador"
            className="bg-principal-light text-white py-10 border-b-2 border-[#D4AF37]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8 font-thin"
              backgroundColor="#e5e7eb" 
              progressColor="#D4AF37" 
              textColor="#ffffff" 
              valueClassName="text-3xl font-bold"
              labelClassName="text-base font-light"
            />
          </section>
        <section id="lugares" className=" border-b-2 border-[#D4AF37]">
          <Lugares
          iglesia= "[Nombre Iglesia]"
          hora_iglesia = "18:30hs"
          salon= "[Nombre Salón]"
          hora_civil= "13:00hs"
          hora_fiesta= "20:00hs"
          />
        </section>

          {/* <section className="relative my-10 pb-10 border-b-2 border-[#D4AF37]">
            <GalleryVintage
              images={[
                {
                  index: 1,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735527048/Imagen_de_WhatsApp_2024-12-29_a_las_22.57.33_f9f5bf2b_ifsj5l.jpg",
                },
                {
                  index: 2,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735527113/Imagen_de_WhatsApp_2024-12-29_a_las_22.57.32_a25fd1b8_smbhnh.jpg",
                },
                {
                  index: 3,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735526968/Imagen_de_WhatsApp_2024-12-29_a_las_22.57.33_b8874616_i2bcnm.jpg",
                },
                {
                  index: 4,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735508433/Dise%C3%B1o_sin_t%C3%ADtulo_6_xy3ozy.png",
                },
                {
                  index: 5,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735526902/Imagen_de_WhatsApp_2024-12-29_a_las_22.57.33_3d376287_napqll.jpg",
                },
                {
                  index: 6,
                  img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1735517155/8c881929-3182-4ac1-b38f-90aba216483f.png",
                },
              ]}
            />
          </section> */}
          <section className="py-10 text-center">
            <InstagramWall user="@boda_loreyjorge"/>
          </section>
          <section className="bg-principal-light py-10 text-white text-center">
            <GoogleCalendarButton 
            titleCalendar="Casamiento de Lore y Jorge"
            salon="4V26+G67 Neuquén, Argentina"
            fechaComienzo="20260215T180000"
            fechaFin="20260216T050000"
            />
          </section>
          <section className="relative my-10 border-b-2 pb-10 border-[#D4AF37]">
            <img
              src={hojasVerdesIzq}
              alt="Decoración"
              className="absolute -left-20 lg:left-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
            <DressCodeVintage dress_code="Casual Elegante"/>
            <img
              src={hojasVerdes2}
              alt="Decoración"
              className="absolute -right-20 lg:right-[-50px] top-1/2 transform -translate-y-1/2 w-40 lg:w-52 opacity-70"
            />
          </section>
          <section className="my-10 border-b-2 border-[#D4AF37]">
            <DatosBancarios
              texto="Si deseás hacernos un regalo te dejamos nuestros datos"
              cbu=""
              alias="cuevasgalera.mp"
              banco="Mercado Pago"
              nombre="Jorge Leonardo Cuevas Méndez"           
              claseContenedor="bg-[#FAF3E0] py-10 text-center text-black"
              claseBoton="border-principal-dark text-white bg-principal-dark hover:bg-transparent hover:text-green-900 text-xl"
              textSize="text-xl"
              background={{backgroundColor: colorPrincipal}}
              styleBotonModal={{ backgroundColor: '#A3B18A',  borderColor: '#A3B18A'}}
              claseBotonModal={{backgroundColor: "#d4af37", borderColor: "#d4af37"}}
              styleModal={{ backgroundColor: colorSecundario }}
              styleBorderModal={{ borderColor: colorPrincipal }}
              styleTextColor={{ color: '#000000' }}
              claseModal="bg-black"
              borderModal="border-gold"
              textColor="text-gold"
            />
          </section>

          <section className="">
            <Asistencia
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdaccu93C2HcSMJOVpPAvxqOCSlOMQguJ_9WCOhT3EJr77bCA/viewform?usp=sharing&ouid=101386997737484433208"
              clase="py-10 bg-[#FAF3E0]"
              claseButton="border-2 border-principal-light bg-principal-light text-white text-xl hover:bg-transparent hover:text-principal-dark font-serif"
            />
          </section>
        <TextoFinal textClass="text-xl italic" textoFinal="En este nuevo capítulo de nuestra historia, vos tenes un lugar especial…"/>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
