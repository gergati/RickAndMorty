//Dependencias
import { createContext, useState, useEffect } from "react";
import Axios from 'axios'
//Context 
export const CharacterContext = createContext()

export const CharactersContextProvider = ({children}) =>{

    const [characters, setCharacters] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [pages, setPages] = useState(0);
    const [actualPages, setActualPages] = useState(1);
    const [prevPages, setPrevPages] = useState(null);
    const [nextPages, setNextPages] = useState(null);
    //Llamada a la API
    useEffect(() => {
        Axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(response => {
                if(response.status === 200){
                    const { info, results } = response.data
                    setCharacters(results)
                    setTotalResults(info.count)
                    setPages(info.pages)
                    setPrevPages(info.prev)
                    setNextPages(info.next)
                }
            })
    }, []);

    const goToPage = (page, e) => {
        const type = e.target.dataset.type
        switch (type) {
            case 'prev':
                setActualPages(actualPages - 1)
                break;
            case 'next':
                setActualPages(actualPages + 1)
                break;
            case 'goTo':
                const number = Number(e.target.value)
                page = `https://rickandmortyapi.com/api/character?page=${number}`
                setActualPages(number)
                break;
            default:
                return;
        }
        Axios.get(page)
            .then(response => {
                if(response.status === 200){
                    const { info, results } = response.data
                    setCharacters(results)
                    setPrevPages(info.prev)
                    setNextPages(info.next)
                }
            })
    }

    return (
        <CharacterContext.Provider value={{
            characters,
            totalResults,
            pages,
            actualPages,
            prevPages,
            nextPages,
            goToPage,
        }}>
            {children}
        </CharacterContext.Provider>
    )
}