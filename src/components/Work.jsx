
export const Work = () => {

  return (
<section className="work section" id="work">
        <h2 className="section-title">Work</h2>
        
        <div className="work__container bd-grid">
            <a href="https://alanvrtal.github.io/maxlimweb/" className="work__img">
                <img src="img\Maxlim.png" alt="" /> 
               <div className="work__img-modal">
                <span>Maxlim Web</span>
                <p>Empresa de limpieza <br /> (En desarrollo)</p>
               </div>
            </a>
            <a href="https://car-wash-av.netlify.app/" className="work__img">
                <img src="img\Carwash.png" alt="" />
                <div className="work__img-modal">
                <span>Car Wash</span>
                <p>Proyecto para lavadero</p>
               </div>

            </a>
            <a href="https://gif-expert-av.netlify.app/" className="work__img">
                <img src="img\Gifpage.png" alt="" />
                <div className="work__img-modal">
                <span>Gif Expert App</span>
                <p>Buscador de GIFS <br /> (proyecto API - React)</p>
               </div>
            </a>
            <a href="https://alanvrtal.github.io/StoneEssences/" className="work__img">
                <img src="img\Stone.png" alt="" />
                <div className="work__img-modal">
                <span>Stone Essences Web</span>
                <p>Empresa de ventas de Vapers <br /> (En desarrollo)</p>
               </div>
            </a>
            <a href="https://alanvrtal.github.io/Portafolio2/" className="work__img" >
                <img src="img\Portfolio.png" alt="" />
                <div className="work__img-modal">
                <span>Portfolio</span>
                <p>Mi contenedor de proyectos personales</p>
               </div>
            </a>
            <a href="https://alanvrtal.github.io/QuoteMachine/" className="work__img">
                <img src="img\QuoteMachine.png" alt="" />
                <div className="work__img-modal">
                <span>Quote Machine</span>
                <p>Pagina para encontrar frases y compartirlas. <br /> (Proyecto final de FreeCodeCamp)</p>
               </div>
            </a>
        </div>
    </section>  
    )}