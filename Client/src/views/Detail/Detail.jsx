import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styleDetail from "./Detail.module.css";

const Detail = () => {
    const id = useParams().id;
    const [character, setCharacter] = useState({});

    useEffect(() => {
        /* axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => { */
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
        });
        return setCharacter({});
    }, [id]);
    
    return (
        <div className={`${styleDetail.detailContainer} ${styleDetail[character.gender]}`}>
            <div>
                <h1>{character.name}</h1>
                <div className={styleDetail.detailList}>
                    <p>STATUS | {character.status}</p>
                    <p>GENDER | {character.gender}</p>
                    <p>SPECIE | {character.species}</p>
                    <p>ORIGIN | {character.origin?.name}</p>
                    <p>LOCATION | {character.location?.name}</p>
                </div>
            </div>
            <div>
                    <img src={character.image} alt={character.name} />
                </div>
        </div>
    )
}

export default Detail;