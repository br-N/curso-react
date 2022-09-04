import { useState } from 'react';

import Saudacao from '../Saudacao';
import SeuNome from '../SeuNome';

function Home() {
    
    const [nome, setNome] = useState()

    return(
        <div>
            <h1>Home</h1>
            <SeuNome setNome={setNome}/>
            <Saudacao nome={nome}/>
        </div>
    )
}

export default Home