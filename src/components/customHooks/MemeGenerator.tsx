import {useEffect, useState} from 'react'
import {MemeInterface} from '../../interfaces/meme'
import {Service} from '../../interfaces/service'

interface MemesInterface{
    data: {
        memes: MemeInterface[]
    }
}

export const MemeGenerator = () : Service<MemesInterface> => {

    const [memes, setMemes] = useState<Service<MemesInterface>>({status: "loading"})

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(data => data.json())
        .then(memesAPI => setMemes({status: "loaded", payload: memesAPI}))
        .catch(error => setMemes({status: "error", error: error}))
    },[])

    return memes
}
