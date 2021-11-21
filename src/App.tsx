import React, {useState, useCallback} from 'react';
import './App.css';
import { MemeGenerator } from './components/customHooks/MemeGenerator';
import { MemeInterface } from './interfaces/meme';
import  Navbar  from './components/Navbar/Navbar';
import { Meme } from './components/Meme/Meme';


export const App = () => {
  const memes = MemeGenerator()
  const [name, setName] = useState<MemeInterface | undefined>({} as MemeInterface)

  const handleOnChange = useCallback((event : React.ChangeEvent<HTMLSelectElement>) : void  => {
    let memePicked = event.target.value as string
    if(memes.status === "loaded"){
      const selectedMeme : MemeInterface | undefined = memes.payload.data.memes.find(meme => meme.name === memePicked)
      setName(selectedMeme)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[memes.status])

  return (
    <div>
        {memes.status === "loaded" && <Navbar memes={memes.payload.data.memes} handleOnChange={handleOnChange}/>}
        {memes.status === "loading" && (<h1>Working</h1>)}
        {memes.status === 'error' && (<div>Error, the backend is not working.</div>)}

        {name?.url && (<Meme Meme={name}/>)}
    </div>
  )
}


export default App;
