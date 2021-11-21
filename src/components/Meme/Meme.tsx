import React, {useState, useEffect} from 'react'
import styles from './Meme.module.css'
import { MemeInterface } from '../../interfaces/meme'

type Props = {
    Meme: MemeInterface | undefined
}

interface MemeStateInterface{
    up: string,
    down: string
}


export const Meme : React.FC<Props> = ({Meme}) => {
    const [input, setInput] = useState<MemeStateInterface>({
        up:"",
        down:"",
    } as MemeStateInterface)

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target

        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        setInput({
            up: "",
            down: "",
        })
    }, [Meme])

    

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <input onChange={handleInput} name="up" type="text" value={input.up} className={styles.inputBox}/>
                <h1 className={styles.titleup}>{input.up}</h1>
                    <img className={styles.memeImage} src={Meme?.url} alt="" />
                <h1 className={styles.titledown}>{input.down}</h1>
                <input onChange={handleInput}  type="text" name="down" value={input.down} className={styles.inputBox}/>
            </div>
        </div>

    )
}
