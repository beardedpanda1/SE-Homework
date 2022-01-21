import React from 'react'
import Groceries from './Form'
import Render from './Render'

class Lists extends Component{
    
    constructor(){
        super()
        this.state = {
            items : [
                {item:"Milk",
                units:"1 gallon",
                quantity:"2",
                isPurchased: false},
                {item:"banana",
                units:"1.5lbs",
                quantity:"1",
                isPurchased:false},
                {item:"bread",
                units:"1 loaf",
                quantity:"1",
                isPurchased:false}
            ]
        }
    }
    
    render(){
        return(
            <div>
                //create function to add anything from input into here in this array
                <Input oneGrocery={this.addGroceries} />

                {this.state.groceries.map((grocery,index) => {return <Render grocery={grocery} key={index}})}
            </div>
        )
    }
}