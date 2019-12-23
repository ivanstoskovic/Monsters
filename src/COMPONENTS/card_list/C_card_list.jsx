import React from 'react';
import './SC_card_list.css';
import {Card} from '../card/C_card';

export const CardList = props => (
    <div className = "card-list">
        {
            props.monsters.map(monster =>(
            <Card key={monster.id} monster={monster}/>
            ))
        }
    </div>
);