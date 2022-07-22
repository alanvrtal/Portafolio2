import { useState } from "react"




export const Nav = () => {
  
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
)}
