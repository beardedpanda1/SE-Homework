import React from 'react'



class Render extends Component{
    render()
    {
        return(
            <div>
                <h1>Item: {props.grocery.item}</h1>
                <h1>Units: {props.grocery.units}</h1>
                <h1>Quantity: {props.grocery.quantity}</h1>
            </div>
        )
    }
}

export default Render;