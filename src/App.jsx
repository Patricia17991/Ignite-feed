//jsx = Javascript + XML (semelhante ao html)
import {Post} from './Post'
import './styles.css'


function App() {
  return (
    <>
     <Post author="Patricia" 
     content="O componente nada mais é que uma 
     função que retorna html."
     />
     <Post author="Kireina" 
     content="O componente nada mais é que uma 
     função que retorna html."
     />
     </>
     
  )
}

export default App

//O componente nada mais é que uma função que retorna html.
//As propriedades no react servem para reaproveitarmos componentes mudando apenas o visual.
