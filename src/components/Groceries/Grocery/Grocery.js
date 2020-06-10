import React from 'react';

const Grocery = (props) => {
    return (
        <tr onClick={props.click}>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>MAD{props.price}</td>
        </tr>
    )
}

export default Grocery