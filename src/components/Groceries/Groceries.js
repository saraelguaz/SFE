import React from 'react';

import './Groceries.css';

import Grocery from './Grocery/Grocery';


const Groceries = (props) => {
    return (
        <div className='table-button-group'>
            <div className='groceries-table'>
                <table className='bx--data-table-v2'>
                    <thead>
                        <tr>
                            <th>
                                <span className='bx--table-header-label'>
                                    Nom
                                </span>
                            </th>
                            <th>
                                <span className='bx--table-header-label'>
                                    Quantite
                                </span>
                            </th>
                            <th>
                                <span className='bx--table-header-label'>
                                    Prix
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.groceries.map(grocery => {
                            return <Grocery 
                            key={grocery.id}
                            name={grocery.name}
                            quantity={grocery.quantity}
                            price={grocery.price.toString()}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Groceries