import React, { useState } from 'react';
import './Contenido.css';
import CardTexto from './CardTexto';
import CardGPT from './CardGPT';


function Contenido() {
    const [chatGPTResponse, setChatGPTResponse] = useState('');

    console.log(chatGPTResponse);

    return (
        <div className='container'>            
            <CardTexto setChatGPTResponse={setChatGPTResponse} />
            <CardGPT chatGPTResponse={chatGPTResponse} />
        </div>
    );
}

export default Contenido;