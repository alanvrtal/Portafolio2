import { useState } from "react"

/* A MEJORAR */
/* 1. En la version tablet, agregar imagen que rellene mejor el tamaño al lado de los skills (tambien podria ser en la version screen, podria ser una imagen de todas las habilidades) 
2. Agregar imagen en la section "HOME" en la version SCREEN (Quizas tablet tambien)*/

export const MainPortafolio = () => {
  
    const [showMenu, setShowMenu] = useState(false)

    /* Active link, and remove menu */
    const linkAction = ({target}) => {
        const navLink = document.querySelectorAll('.nav__link')
        navLink.forEach(n => n.classList.remove('active'))
        target.classList.add('active')
        setShowMenu(!showMenu) 
    }
/* Active and remove menu */
    const handleToggle = () => {
        setShowMenu( !showMenu )  
    }
  
    return (
      <>
        <header className="header">
            <nav className="nav bd-grid">
            <div>
                <a href="" className="nav__logo">React Developer - Alan Vrtal</a>
            </div>
            <div className={`nav__menu ${showMenu ? 'show' : ""}`} id='nav-menu'>
                <ul className="nav__list">
                    <li onClick={linkAction} className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li onClick={linkAction} className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li onClick={linkAction} className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                    <li onClick={linkAction} className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                    <li onClick={linkAction} className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            </div>
            <div onClick={handleToggle} className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
            </div>
            </nav>
        </header>
        <main className="main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <div className="home__text">
                        <h1 className="home__title">Hi visitor!
                        <br />I'am 
                        <span className="home__title-color"> Alan Vrtal</span>,
                        <br />React Developer.</h1>
                    </div>
                    <div className="home__social">
                    <a href="#" className="button home__button">Contact</a>
                        <a href="#" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                        <a href="#" className="home__social-icon"><i className='bx bxl-instagram' ></i></a>
                        <a href="#" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                    </div>
                </div>


                    <div className="home__img">
                        <img src="https://i.imgur.com/12pvc9l.png" alt="" />
                    </div>
            </section>
            {/* ABOUT */}
            <section className="about section" id="about">
                <h2 className="section-title">About</h2>
                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="https://i.imgur.com/cBo5zzk.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className="about__subtitle">This is me!</h2>
                        <p className="about__text"> I'm a <span className="home__title-color">self-taught React developer</span> from Buenos Aires, Argentina.
              I love making layouts with personality and related to the purpose of the web that have an <span className="home__title-color">intuitive interface</span> for the user.</p>
                        <img className="about__img2" src="https://i.imgur.com/IahcCd4.png" alt="" />
                    </div>
                </div>
            </section>
            {/* SKILLS */}
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills__container bd-grid">
            <div className="skills__order">
                <h2 className="skills__subtitle">Profesional Skills</h2>
                <p className="skills__text"> This is just a representation of the technologies that I use the most to carry out my projects.</p>
                {/* BARRA HTML */}
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-html5 skills__icon'></i>
                        <span className="skills__name">HTML5</span>
                    </div>
                    <div className="skills__bar skills__html"></div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                {/* BARRA CSS */}
                <div className="skills__data">
                    <div className="skills__names">
                         <i className='bx bxl-css3 skills__icon' ></i>
                        <span className="skills__name">CSS3</span>
                    </div>
                    <div className="skills__bar skills__css"></div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                </div>
                {/* BARRA JAVASCRIPT */}
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-javascript skills__icon' ></i>
                        <span className="skills__name">JAVASCRIPT</span>
                    </div>
                    <div className="skills__bar skills__js"></div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                 </div>
                {/* BARRA REACT */}
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-react skills__icon' ></i>
                        <span className="skills__name">REACT</span>
                    </div>
                    <div className="skills__bar skills__react"></div>
                    <div>
                        <span className="skills__percentage">85%</span>
                    </div>
                 </div>
                {/* GIT */}
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-git skills__icon' ></i>
                        <span className="skills__name">GIT</span>
                    </div>
                    <div className="skills__bar skills__git"></div>
                    <div>
                        <span className="skills__percentage">70%</span>
                    </div>
                 </div>
                {/* BARRA BOOTSTRAP */}
                 <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-bootstrap skills__icon'></i>
                        <span className="skills__name">BOOTSTRAP</span>
                    </div>
                    <div className="skills__bar skills__bootstrap"></div>
                    <div>
                        <span className="skills__percentage">50%</span>
                    </div>
                </div>
                {/* BARRA SASS */}
                <div className="skills__data">
                    <div className="skills__names">
                         <i className='bx bxl-sass skills__icon' ></i>
                        <span className="skills__name">SASS</span>
                    </div>
                    <div className="skills__bar skills__sass"></div>
                    <div>
                        <span className="skills__percentage">50%</span>
                    </div>
                </div>
                {/* BARRA NODE */}
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='bx bxl-nodejs skills__icon' ></i>
                        <span className="skills__name">NODEJS</span>
                    </div>
                    <div className="skills__bar skills__nodejs"></div>
                    <div>
                        <span className="skills__percentage">40%</span>
                    </div>
                 </div>
        
            </div>
        <div>
            <img className="skills__img" src="https://i.imgur.com/2ziwGpO.png" alt="" />
            {/* <img className="skills__img2" src="src\assets\img\monster2.png" alt="" /> */}
        </div>
    </div>    
    </section>
    {/* WORK */}
    <section className="work section" id="work">
        <h2 className="section-title">Work</h2>
        
        <div className="work__container bd-grid">
            <a href="" className="work__img">
                <img src="src/assets/img/work1.jpg" alt="" />
            </a>
            <a href="" className="work__img">
                <img src="src/assets/img/work2.jpg" alt="" />
            </a>
            <a href="" className="work__img">
                <img src="src/assets/img/work3.jpg" alt="" />
            </a>
            <a href="" className="work__img">
                <img src="src/assets/img/work4.jpg" alt="" />
            </a>
            <a href="" className="work__img">
                <img src="src/assets/img/work5.jpg" alt="" />
            </a>
            <a href="" className="work__img">
                <img src="src/assets/img/work6.jpg" alt="" />
            </a>
        </div>
    </section>
    {/* CONTACT */}
    <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact__container bd-grid">
            <form action="" className="contact__form">
                <input type="text" placeholder="Name" className="contact__input" />
                <input type="mail" placeholder="Email" className="contact__input" />
                <textarea name="" id="" cols="0" placeholder="Write me a message!" rows="0" className="contact__input"></textarea>
                <input type="button" value="Enviar" className="contact__button button" />
            </form>
        </div>
    </section>
</main>
{/* FOOTER */}
<footer className="footer">
    <p className="footer__title">My social networks</p>
    <div className="footer__social">
        <a href="" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
        <a href="" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
        <a href="" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
    </div>
    <p className="footer__copy">&#169;2022</p>
    <p className="footer_text">"I am the master of my fate, I am the captain of my soul."</p>
</footer>
</>
)}
