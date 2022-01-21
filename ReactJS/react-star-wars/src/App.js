// Exercises
// Styling in this lab is secondary to completing the functionality

// Research documentation of SWAPI (Links to an external site.) to find the endpoint for the starships resource. (DONE:CHECK UNDER IMPORTANT NOTES BELOW)
// Use the fetch method to make requests to at least one endpoint
// Obtain all of the starships from the API and render in <App> a card for each starship.
// Cards should contain the text of the starship's name.
// Make use of routing with React Router v6 in some way (npm install react-router-dom) 


//Important notes for starwars API

// "starships": "https://swapi.dev/api/starships/" api for starships is the only thing needed
// starships array -- An array of starship resource URLs that this person has piloted.
// /starships/ -- get all the starship resources
// /starships/:id/ -- get a specific starship resource
// /starships/schema/ -- view the JSON schema for this resource

// Attributes:

    // name string -- The name of this starship. The common name, such as "Death Star".
    // model string -- The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
    // starship_class string -- The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
    // manufacturer string -- The manufacturer of this starship. Comma separated if more than one.
    // cost_in_credits string -- The cost of this starship new, in galactic credits.
    // length string -- The length of this starship in meters.
    // crew string -- The number of personnel needed to run or pilot this starship.
    // passengers string -- The number of non-essential people this starship can transport.
    // max_atmosphering_speed string -- The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
    // hyperdrive_rating string -- The class of this starships hyperdrive.
    // MGLT string -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
    // cargo_capacity string -- The maximum number of kilograms that this starship can transport.
    // consumables *string
    // The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
    // films array -- An array of Film URL Resources that this starship has appeared in.
    // pilots array -- An array of People URL Resources that this starship has been piloted by.
    // url string -- the hypermedia URL of this resource.
    // created string -- the ISO 8601 date format of the time that this resource was created.
    // edited string -- the ISO 8601 date format of the time that this resource was edited.

// Search Fields:

    // name
    // model

//END NOTES

import './App.css';
import Starship from './Components/Starship';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">\
        <Navbar />
          <Routes>
            <Route path="home" element={<Starship />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        {/* <Starship /> */}
      </div>
    </Router>
  );
}

export default App;
