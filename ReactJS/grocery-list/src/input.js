import React, {useState} from 'react'
import React, { Render } from 'react-dom'

export default function Input(){
    let stuff = {
        item="",
        units="",
        quantity="",
        isPurchased: false,
    }

    let [items, setItems] = useState(stuff);

    handleChange = (event) => {
        if (event.target.id === 'item') {
            this.setState({ item: event.target.value})
        } else if (event.target.id === 'units') {
            this.setState({ units:event.target.value})
        } else {
            this.setState({ quantity:event.target.value})
        }
    }

    handleSubmit= (event) => {
        event.preventDefault();
        this.props.oneGrocery(this.state)
    }
    
    return(
        <form onSubmit={this.handleSubmit} className="cf">

            <label htmlFor="item">item:</label>
            <input
                id="item"
                onChange={this.handleChange}
                value={this.state.item}
            />

            <label htmlFor="units">units:</label>
            <input maxLength={"15"}
                id="units"
                onChange={this.handleChange}
                value={this.state.units}
            />

            <label htmlFor="quantity">quantity:</label>
            <input
                id="quantity"
                onChange={this.handleChange}
                value={this.state.quantity}
            />
        </form>
    )
    
}

