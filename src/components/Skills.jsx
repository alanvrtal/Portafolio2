
export const Skills = () => {
  return (
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
    )}
