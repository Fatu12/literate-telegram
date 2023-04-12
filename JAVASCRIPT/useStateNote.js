import React, {useState} from "react"
const Prodect = (props) =>{
    return {
        // inStock is a getter and setStock update the state and our set has to be exactly the same name we named our getter
        // useState allow as to set the default values 
        // getter values are the current value 
        // 

        const [inStock, setStock] = useState(5)
        <div> 
            <h1>{props.title}</h1>
            <p>Description: {props.desc }</p>
            <p>Cost: ${props.cost} </p>
            <p> In Stack: {inStock }</p>
            <button onClick ={(event)=>setInStock(inStock -1)}
        </div>
    }
}