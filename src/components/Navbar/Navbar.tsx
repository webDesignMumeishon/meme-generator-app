import React from 'react'
import styles from './Navbar.module.css'
import { MemeInterface } from '../../interfaces/meme'

type Props = {
    memes: MemeInterface[]
    handleOnChange: (e : React.ChangeEvent<HTMLSelectElement>) => void
}

const Navbar : React.FC<Props> = ({memes, handleOnChange}) => {
    console.log(`holis`);
    return (
        <nav className={styles.container}>
            <h1>Meme Generator</h1>
            <select onChange={handleOnChange} className={`${styles.drawBorder} ${styles.btn}`}>
                {memes.map(meme => 
                    <option key={meme.id} value={meme.name}>{meme.name}</option>
                )}
            </select>
        </nav>
    )
}

export default React.memo(Navbar)