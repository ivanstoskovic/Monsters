import React from 'react';
import './SC_card.css';

export const Card = (props) => (
    <div className='card-container'>
        
            {/* Slike su povucene sa sajta samo se menja Id i kreiral link*/}
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>
            {props.monster.name}
        </h2>
        <p>
            {props.monster.email}
        </p>
    </div>
);