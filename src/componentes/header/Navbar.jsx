import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <Link>Inicio</Link>
                <Link>Sueños</Link>
                <Link>Historias</Link>
                <Link>Loguear</Link>
		    </nav>
        </div>
    );
}

export default Navbar;