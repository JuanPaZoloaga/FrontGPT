import React, {useState} from 'react';
import { instance } from '../../config/axiosapi';

function CardTexto({ setChatGPTResponse }) {
    const [inputUsuario, setInputUsuario] = useState(""); // camel case, snake case, pascal case
    
    
    function changeinput(event){
        const input = event.target.value;
        setInputUsuario(input);
    }  

    const handleClick = async (param) => {
        try {
            const axiosResponse = await instance.get(`/gpt/${param}?prompt=${inputUsuario}`);
            const serverResponse = axiosResponse.data;
            console.log('serverResponse', serverResponse)
            setChatGPTResponse(serverResponse);
        } catch(err) {
            console.log(err);
        }
    } // Refactorizar

    return (
        <div className='card w-50'> 
            <header style={{color:"white"}}>Usuario</header>
            <textarea onChange={changeinput} name="" id="" cols="30" rows="10" placeholder='Ingrese lo que recuerde del sueño'>

            </textarea>
            <div className='container d-flex col-3 w-100 justify-content-center'>
                <button onClick={() => handleClick(1)} className='btn btn-primary'>finalizar Sueño</button>
                <button onClick={() => handleClick(2)} className='btn btn-primary'>Finalizar Narrativa</button>
                <button onClick={() => handleClick(3)} className='btn btn-primary'>Finalizar....</button>
            </div>
        </div>
    );
}

export default CardTexto;