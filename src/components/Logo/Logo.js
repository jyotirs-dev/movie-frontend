import React from 'react';
import movieLogo from '../../assets/transparent.png';
import {Link} from 'react-router-dom';
import classes from './Logo.module.css';

const logo = (props)=>(
    <div className={classes.LogoParent}>
        <div className={classes.Logo} >
            <Link to="/"><img src={movieLogo} alt="MyMovieList"/></Link>
        </div>

        <div className={classes.LogoChild}>
            <Link to="/">Movie Zone</Link>
        </div>
    </div>
);

export default logo;