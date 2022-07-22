export const Home = () => {
  return (
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
                <a href="https://www.linkedin.com/in/alanvrtal/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/alanvrtal/" className="home__social-icon"><i className='bx bxl-instagram' ></i></a>
                <a href="https://github.com/alanvrtal" className="home__social-icon"><i className='bx bxl-github' ></i></a>
            </div>
        </div>
            <div className="home__img">
                <img src="https://i.imgur.com/12pvc9l.png" alt="" />
            </div>
    </section>
  )
}
