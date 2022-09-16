//Context
import { CharactersContextProvider } from "./context/characterContext"
import { Characters } from "./components/Characters"

//Components



export const App = () => {
  return (
    <div className="container">
        <h2 className="alert alert-success text-center">Rick And Morty App</h2>
        <CharactersContextProvider>
          <Characters/>
        </CharactersContextProvider>
    </div>
  )
}


