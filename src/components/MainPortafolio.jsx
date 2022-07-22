import { useState } from "react"
import { Nav } from "./Nav"
import {Home} from './Home'
import {About} from './About'
import { Skills } from "./Skills"
import { Work } from "./Work"
import { Contact } from "./Contact"
import { Footer } from "./Footer"


/* A MEJORAR */
/* 
1. En la version tablet, agregar imagen que rellene mejor el tamaño al lado de los skills (tambien podria ser en la version screen, podria ser una imagen de todas las habilidades) 
2. Agregar imagen en la section "HOME" en la version SCREEN (Quizas tablet tambien)
3. Falta agregarle el efecto en la section work a los projectos, con su descripcion.
4. Crear efectos al scrollear de aparicion.
5. Hacer que cuando se revise una seccion se marque en el nav (Version SCREEN)
6. que el formulario envie a algun lugar y tenga un sistema anti spam.
7. Ver si se puede fijar el significado de los skills sin que lo traduzca el google translate.

*/

export const MainPortafolio = () => {
  
    return (
      <>
        <Nav/>
        <main className="main">
            <Home/>
            <About/>       
            <Skills/>                     
            <Work/>
            <Contact/>
        </main>
            <Footer/>
</>
)}
