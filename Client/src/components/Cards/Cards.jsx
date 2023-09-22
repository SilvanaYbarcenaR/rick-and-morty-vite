import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import cardsStyle from "./Cards.module.css";
import { useLocation } from 'react-router-dom';
import audioG from "../../assets/coleguilla-gama.mp3";
import { GrClose } from "react-icons/gr";

const Cards = ({characters, onClose, modalOpen}) => {
   const [isOpen, setIsOpen] = useState(modalOpen);
   const currentPath = useLocation();
   const closeModal = () => {
      setIsOpen(false);
   }
   let audio = new Audio(audioG);

   const startAudio = () => {
     audio.play()
   }
   return (
      <div className={cardsStyle.cardsContainer}>
         {/* {currentPath.pathname === "/home" &&
            <div className={`${cardsStyle.modal} ${!isOpen && cardsStyle.closeModal}`}>
               <button className={cardsStyle.close} onClick={closeModal}><GrClose/></button>
               <h3>Welcome</h3>
               <p><button onClick={startAudio}>Coleguillas</button> Gracias por visitar mi aplicación de Rick and Morty 😊.</p>
               <p>En esta app podrás buscar personajes de la serie Rick and Morty por ID y de manera Random, revisar los detalles de cada personaje; además de añadirlos a una lista de favoritos y eliminarlos.</p>
               <p>Adicionalmente podrás conocer un poco más sobre mi en la página de About y un plus: ver algunos capítulos de Rick and Morty en la página de Episodes.</p>
               <p>Espero disfruten navegar por esta página así como pude hacerlo yo al desarrollarla 😊.</p>
            </div>
         } */}
         {
            characters?.map(({ id, name, species, gender, image}) => {
               return (
                  <Card
                     key={id} 
                     id={id}  
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose && onClose} 
                  />
               )
            })
         }
      </div>
   )
}

export default Cards;