import React, { Component} from 'react'

class Hello extends Component
{
    render()
    {
        return(
            <div>
                <h2><center>Hello {this.props.name}</center></h2>
                
            </div>
        )
    }
}

export default Hello