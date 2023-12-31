import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail';
import Login from './views/Login/Login';
import About from './views/About/About';
import Error from './views/Error/Error';
import Favorites from './views/Favorites/Favorites';
import Episodes from './views/Episodes/Episodes';

const App = () => {
   const [characters, setCharacters] = useState([]);
   const [cache, setCache] = useState([]);
   const [access, setAccess] = useState(false);
   const [errorLogin, setErrorLogin] = useState("");
   const [modalOpen, setModalOpen] = useState(false);
   const currentPath = useLocation();
   const navigate = useNavigate();
   const storage = sessionStorage;
   const location = useLocation();

   const classUrl = location.pathname.slice(1);

   /* const onSearch = () => {
      const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      };
      setCharacters([
         ...characters,
         example
      ])
   } */

  /*  const onSearch = (id) => {
      if(!cache.includes(id)) {
         setCache([
            ...cache,
            id
         ]) */
         /* axios(`https://rickandmortyapi.com/api/character/${id}`) */
         /* axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  alert('¡No hay personajes con este ID!');
               }
            })
            .catch((error) => {
               alert('¡No hay personajes con este ID!');
            })
      } else {
         alert("Character was added before");
      }
   } */

   const onSearch = async (id) => {
      try {
         if(!cache.includes(id)) {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               setCache([
                  ...cache,
                  id
               ])
            } 
         } else {
            alert("Character was added before");
         }
      } catch (error) {
         alert(error.response.data);
      }
   }

   const randomHandler = () => {
      const random = (Math.random() * 826).toFixed();
      onSearch(random);
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter (
			character => character.id !== id
		);
      setCharacters(charactersFiltered);
      const cacheFiltered = cache.filter (
			cacheEl => cacheEl.id !== id
		);
      setCache(cacheFiltered);
   }
   
   const login = async (userData) => {
      /* if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         storage.setItem('auth', JSON.stringify({...userData, auth: true}));
         setErrorLogin("");
         navigate('/home');
      } else {
         setErrorLogin("Incorrect credentials");
      } */
      /* const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(
         ({ data }) => {
            const { access } = data;
            setAccess(data);
            storage.setItem('auth', JSON.stringify({auth: true}));
            access && navigate('/home');
         },
         (error) => setErrorLogin("Incorrect credentials")
      ); */
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data)
         storage.setItem('auth', JSON.stringify({auth: true, email}));
         setModalOpen(true);
         access && navigate('/home');
      }
      catch(error) {
         setErrorLogin("Incorrect credentials")
      }
   }

   const logout = (logout) => {
      setAccess(!logout);
      storage.clear();
      navigate('/login');
   }

   useEffect(() => {
      if(storage.auth === true) {
         !access && navigate('/login');
      }
   }, [access]);

   return (
      <div className={`App ${classUrl}`}>
         <div className="space"></div>
         {(currentPath.pathname !== "/login" && currentPath.pathname !== "/error") && <Nav onSearch={onSearch} randomHandler={randomHandler} logout={logout} />}
         <Routes>
            <Route path="/login" element={<Login login={login} errorLogin={errorLogin}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} modalOpen={modalOpen}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to='/error'/>} />
         </Routes>
      </div>
   );
}

export default App;
