import React, {useState, useEffect} from 'react';
import axios from "axios";
import Points from './Points';

export default function Jeopardy(){
    const[gameshow, setGameshow] = useState([])
    const[hideAnswer, setHideAnswer] = useState(false)
    //variable that changes based on whether its true/false on click
    //when button is clicked, it turns true
    //use ternary statement to see if components is shown or not
    //this is what it shows or hides

    function gameshow2(){
        // console.log("i was here")
        axios.get("http://jservice.io/api/random")
        .then((res) => {
            console.log(res.data)
            setGameshow(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
            setHideAnswer(false)
        //hide answer(which is question in jeopardy) after clicking new question
    }

    //replace old question with new question
    //how do we use certain functions to achieve this? maybe mounting methods?
    //do we store old questions?
    

    useEffect(() => { 
        axios.get("http://jservice.io/api/random")
        .then((res) => {
            console.log(res.data)
            setGameshow(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    

        return(
            <div className="game">
                <h1 className="title"><center>Jeopardy</center></h1>
                {
                    gameshow.map((gameshow, index) => (
                        <div key = {index} className="gameshow">
                            <center><div className="questionContainer">
                                <button onClick={() => gameshow2()}>Get Question</button> 
                                <br />
                                {/* inside the onclick have the axios run again, maybe as a function? */}
                                Answer: {gameshow.question}
                                <br />
                                Catagory: {gameshow.category.title}
                                <br />
                                Value: {gameshow.value}
                                <br />
                                <button onClick = {() => setHideAnswer(!hideAnswer)}>Click me to get answer!</button>
                                {hideAnswer ? <p>Question: {gameshow.answer}</p>:null}
                            </div></center>
                        
                            <table className="points">
                                <tr>
                                    <td className="user">User 1: <Points points={gameshow.value}/></td>
                                    <br />
                                    <td className="user">User 2: <Points points={gameshow.value}/></td>
                                    <br />
                                    <td className="user">User 3: <Points points={gameshow.value}/></td>
                                    <br />
                                    <td className="user">User 4: <Points points={gameshow.value}/></td>
                                    <br />
                                </tr>
                            </table>
                            
                            
                        </div>
                    ))
                }
                {/* some function that'll return a question */}
                
            </div>
        )
    

        
    
}

//http://jservice.io/api/random