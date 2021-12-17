const userInput = document.getElementById("userInput")
const bronxButton =document.getElementById("Bronx")
const brooklynButton =document.getElementById("Brooklyn")
const manhattanButton =document.getElementById("Manhattan")
const queensButton =document.getElementById("Queens")
const statenIslandButton =document.getElementById("Staten Island")
const displayDescriptor =document.getElementById("displayDescriptor")
const displayResolution =document.getElementById("displayResolution")




bronxButton.addEventListener("click",() =>{
    let userInput2 = userInput.value
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX`
    displayPoliceResolution = (resolutionDescription, elementId) =>{
        let element = document.getElementById(elementId).innerHTML += ` <p> ${resolutionDescription} </p> `
    }

    


fetch(url)
    .then((res) => res.json()) //comms b/w back/front end via api using https request in json
    .then((data) => { 
        displayDescriptor.innerHTML = `<ul>`
        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   Police Resolution </button></li>`
        //console.log(data[i].descriptor)
    
        displayDescriptor.innerHTML += `</ul>`

     
    })
    .catch((error) =>{
        console.log(error);
    });

})



brooklynButton.addEventListener("click",() =>{
    let userInput2 = userInput.value
    const url2 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN`

    fetch(url2)
    .then((res) => res.json()) //comms b/w back/front end via api using https request in json
    .then((data) => { //
        displayDescriptor.innerHTML = `<ul>`
        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   Police Resolution </button></li>`
        //console.log(data[i].descriptor)
    
        displayDescriptor.innerHTML += `</ul>`
    })
    .catch((error) =>{
        console.log(error);
    });
    
})

manhattanButton.addEventListener("click",() =>{
    let userInput2 = userInput.value
    const url3 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN`
    fetch(url3)
    .then((res) => res.json()) //comms b/w back/front end via api using https request in json
    .then((data) => { //
        displayDescriptor.innerHTML = `<ul>`
        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   Police Resolution </button></li>`
        //console.log(data[i].descriptor)
    
        displayDescriptor.innerHTML += `</ul>`
    })
    .catch((error) =>{
        console.log(error);
    });


})

queensButton.addEventListener("click",() =>{
    let userInput2 = userInput.value
    const url4 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS`

    fetch(url4)
    .then((res) => res.json()) //comms b/w back/front end via api using https request in json
    .then((data) => { //
        displayDescriptor.innerHTML = `<ul>`
        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   Police Resolution </button></li>`
        //console.log(data[i].descriptor)
    
        displayDescriptor.innerHTML += `</ul>`
    })
    .catch((error) =>{
        console.log(error);
    });


})

statenIslandButton.addEventListener("click",() =>{
    let userInput2 = userInput.value
    const url5 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN ISLAND`

    fetch(url5)
    .then((res) => res.json()) //comms b/w back/front end via api using https request in json
    .then((data) => { //
        displayDescriptor.innerHTML = `<ul>`
        for (let i=1; i<=userInput2; i++)
        displayDescriptor.innerHTML += `<li id = "row${i}" > ${data[i].descriptor} <button onclick="displayPoliceResolution('${data[i].resolution_description}','row${i}')" >   Police Resolution </button></li>`
        //console.log(data[i].descriptor)
    
        displayDescriptor.innerHTML += `</ul>`
    })
    .catch((error) =>{
        console.log(error);
    });


})
