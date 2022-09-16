//Dependencies
import { useContext } from "react"

//Context
import { CharacterContext } from "../context/characterContext" 

//Components
import { Pagination } from "./Pagination"

export const Characters = () => {

    const { characters } = useContext(CharacterContext)

    return (
        <div className="row">
            <Pagination />
            {
                characters.map((character, index) => {
                    return(
                        <div className="col-3" key={character.name + index}>
                            <div className="card mt-4">
                                <img src={character.image} className="card-img-top" alt={character.name}/>
                                <div className="card-body">
                                    <h4 className="card-title">{character.name}</h4>
                                    <p className="card-text">
                                        <b>Status: </b> {character.status}<br/>
                                        <b>Species: </b> {character.species}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}