import React, { useEffect, useState } from "react";

export default function Points(props) {
  let [count, setCount] = useState(0);
  const increment = () => setCount(previousState=>previousState + props.points);
  const decrement = () => setCount(previousState=>previousState - props.points);
  // const add500 = () => setCount(count + 500);
  // const sub500 = () => setCount(count - 500);
  const reset = () => setCount(0);
  // let [showCount, SetShowCount] = useState(false);

  // useEffect(() => {
  //   console.log("app component mounted. ");
  // }, []);
  // we can use when we want to fetch data
  // because when we fetch data only happens once, we only want data.
  // we don't want to fetch data everytime it renders

  // useEffect(() => {
  //   console.log("testing that count works");
    // idea of side affect
    // you want something to happen
    // you want a function to be a side affect of change
    // this is acting toward the update change
  // }, [count]);
  // you add a  second parameter

  // useEffect(()=>{
  //     console.log('testing that subtraction works')
  //     // idea of side affect
  //     // you want something to happen
  //     // you want a function to be a side affect of change
  //     // this is acting toward the update change
  // }, [count2])

  // let [count,setCount] = useState(0)
  // let [count, setCount] = useState(()=>0)

  // let [state, setState] = useState('auohohgohohg')
  // set hook at top level component
  // don't put it inside another function

  // let [count, setCount] = useState(0)
  // let [count1, setCount1] = useState(0)
  // let [count2, setCount2] = useState(0)

  // let[countObj, setCountObj] = useState({count:0, name:"bob"})
  // let [name, setName] = useState({name:'bob'})

  // let [myObj, setMyObj] =useState({count:0,name:'bob' })
  // setMyObj({...myObj,  name: 'george'})

  // const increment =() => {
  //     // count = 0
  //     setCount(preCount=> preCount +1)
  //     setCount(count + 1)
  //     setCount(count + 1)
  //     setCount(count + 1)
  // }
  // its not gonig to work the same way as set state

  // setCount{(count:count +1)}
  // setCount({...countObj,count: count+1})
  // take full object, spread out properties, make copies, and only change the property you want
  // to change. maintain the other properties in this object and doesn't change name
  // one that handles count one that handles name

  // CLASS COMPONENT

  // this.state={
  // count:0;
  // name: bob
  // job: 'builder'

  // this.setState({count: this.state.count+1})
  // }

  // similiar to array destructuring into sepearte variables

  return (
    <div>
      <h3>count: {count}</h3>
      <button className="pointsButton" onClick={increment}> + </button>
      <button className="pointsButton" onClick={decrement}> - </button>
      {/* <button onClick={add500}>+ 500</button>
      <button onClick={sub500}>- 500</button> */}
      <button className="pointsButton" onClick={reset}>reset</button>
      {/* use state is just a function that returns an array */}
      {/* let arr = useState() [first value is the state, second vlaue is a special method for changing the state similar to set state] */}
      {/* [state, setState] */}
    </div>
  );
}
