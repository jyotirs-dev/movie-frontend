import React from 'react';
import movieLogo from '../../assets/transparent.png';
import {Link} from 'react-router-dom';
import './Logo.scss';

const logo = (props)=>(
    <div className="LogoParent">
        <div className="Logo" >
            <Link to="/"><img src={movieLogo} alt="MyMovieList"/></Link>
        </div>

        <div className="LogoChild">
            <Link to="/my-app">Movie Zone</Link>
        </div>
    </div>
);

export default logo;