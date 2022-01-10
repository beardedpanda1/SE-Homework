
//Random event can be named differently from file
//insert the term "props" within RandomEvent parameters (within the parenthesis) to access props
    //ex: Within App.js where event is called, add a title(anything can be used in that case [<event 'insertsomethinghere' = "some prop you want passed down" />])
        //to call that props within an <h> tag place it like so <h1>{props.insertsomethinghere}</h1>
            //good for importing data in one tag making it look cleaner in the end
function Kitchen(props) {
    return (
        <h1>{props.comp}</h1>
    )
        
}
//exporting the function
export default Kitchen;