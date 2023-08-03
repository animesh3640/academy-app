import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

function Card({id, title, displayImage,path }) {
    return (
        <Link to={`/${path}`}>
            <div className='card'>
                <img className='display-image-card' src={displayImage} alt="" />
                <div className='titleBar'>{title}</div>
            </div>
        </Link>
    )
}

export default Card  