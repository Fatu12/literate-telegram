import React, {useState} from 'react';
// useState  is just a method allows as to give default values
const PersonCard = (props) =>{
    // props in immutable 
    const {firstName,lastName,age, hairColor} = props;
    // age is getter and setCount is update the values of state
    const [ageCount,setCount] = useState(0);
    // look for something to happen by user and perform 
    // event even we not using but it always available to all instance 
    const handleClick = (event) => {
        // setCount is not only incensing the value, but it also rendering
        setCount(ageCount + 1);
        console.log(handleClick)
        console.log("hello")
    } 
    return(
        <div>
            <h1> {firstName}  {lastName} </h1>
            <h5> Age: {ageCount} </h5> 
            <h5> Hair color: {hairColor} </h5>
            
        {/* display the current value of in state */}
            <p> {ageCount}</p>
            {/* you can do the arrow function here */}

             <button onClick = {handleClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard