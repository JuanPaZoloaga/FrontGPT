import React from 'react';


function CardGPT({ chatGPTResponse }) {

    
    return (

        <div className='card w-50'> 
            
            <header style={{color:"white"}}>Chat_GPT</header>
            <textarea value={chatGPTResponse} disabled name="" id="" cols="30" rows="10">
                
            </textarea>
        </div>
    );
}

export default CardGPT;