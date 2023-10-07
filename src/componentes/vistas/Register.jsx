import React from 'react';

function Register() {
    return (
        <div>
            <form className='Form'>
                <input type="text" placeholder='nombre'/>
                <input type="text" placeholder='apellido' />
                <input type="text" placeholder='contraseña' />
                <input type="text" placeholder='email' />

            </form>

        </div>
    );
}

export default Register;