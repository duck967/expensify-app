import React from 'react';
import {Link} from 'react-router-dom';

//{id, description, amount, createdAt, dispatch}
const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
    <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{description}, {amount}, {createdAt}</p>
    </div>

);


export default ExpenseListItem;