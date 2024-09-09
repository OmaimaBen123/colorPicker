import { useState } from "react";
function UseStateCom() {
    const [name, setName] = useState(); 
    const [age,setAge] = useState(0);
    const updateName = () => {
        setName ('spongeBob');

    }
    const updateAge = () => {
        setAge(age + 1);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick= {updateName}>Set Name</button>
        
        
            <p>age: {age}</p>
            <button onClick= {updateAge}>Add age</button>
        </div>
    )
}
export default UseStateCom;