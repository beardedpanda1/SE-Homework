import React, {useState} from 'react'

export default function Render(props) {
    return(
        <div>
            <h1>Item: {props.grocer.item}</h1>
            <h1>Units: {props.grocery.units}</h1>
            <h1>Quantity: {props.grocery.quantity}</h1>
        </div>
    )
}