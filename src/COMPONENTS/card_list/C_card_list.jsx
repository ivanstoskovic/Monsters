import React from 'react';
import './S_card_list.css';

export const CardList = props => {
    console.log(props);
    return(<div className = "card-list">{props.children}</div>);
}