// const displayName = document.getElementById('ShipName')
// const displayModel = document.getElementById('ModelName')
// const displayManufacturer = document.getElementById('ManufacturerName')
// const displayCost = document.getElementById('ShipLength')
// const displayMaxSpeed = document.getElementById('Crew')
// const displayPassengers = document.getElementById('Passengers')
// const displayCargo = document.getElementById('Cargo')
// const displayConsumables = document.getElementById('Consumables')
// const displayHDRating = document.getElementById('HDRating')
// const displayMGLT = document.getElementById('MGLT')
// const displayStarShipClass = document.getElementById('StarShipClass')

// const url1 = 'https://swapi.dev/api/starships/2/'
// const url2 = 'https://swapi.dev/api/starships/3/'
// const url3 = 'https://swapi.dev/api/starships/5/'
// const url4 = 'https://swapi.dev/api/starships/9/'
// const url5 = 'https://swapi.dev/api/starships/10/'
// const url6 = 'https://swapi.dev/api/starships/11/'
// const url7 = 'https://swapi.dev/api/starships/12/'
// const url8 = 'https://swapi.dev/api/starships/13/'
// const url9 = 'https://swapi.dev/api/starships/15/'
// const url10 = 'https://swapi.dev/api/starships/17/'

// const shipInfo = (x) => {
//     return{
//         fetch(x)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     displayName.innerHTML = '${results[0].name}';
//                     displayModel.innerHTML = '${results[0].model}'
//                     displayManufacturer.innerHTML = '${results[0].manufacturer}'
//                     displayCost.innerHTML = '${results[0].cost_in_credits}'
//                     display
//                 })
// }}

import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Starship() {
    const [starships, setStarships] = useState([])

    useEffect(() => {
       axios.get('https://swapi.dev/api/starships/?format=json') 
        .then(res => {
            console.log(res)
            setStarships(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return ( 
            <div className="cards">
                <h1 className="titleHome">Ships in Star-Wars!</h1>
                <ul>
                
                    {
                        starships.map((starship, item) => (<li key= {item}>Name: {starship.name} <br /> Manufacturer: {starship.manufacturer} <br /> Crew: {starship.crew} <br /> Cost: {starship.cost_in_credits}</li>))
                    }

                </ul>
            </div>
    )
  }

export default Starship;