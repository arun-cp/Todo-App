import { useState } from "react";

export default function TodoItem(props){
    const[newtext, updatenewtext] = useState('');
    const[newstatus, updatenewstatus] = useState(true);
    const[buttonconfig, updatebuttonconfig] = useState(false);
    function okbutton(){
        props.alterContent(props.id, newtext, newstatus)
        updatebuttonconfig(false);
        
    }


    return(
        <div id="todoitem">
            {buttonconfig ? 
            <div>
            <label for="change">Task : </label>
            <input type="text" id="change" onChange={(e) => {updatenewtext(e.target.value);
                } }></input>
            <select onChange={(e) => e.target.value === 'Completed'|| null? updatenewstatus(true) : updatenewstatus(false)}>
                <option>Completed</option>
                <option>Not Completed</option>
            </select>
            <button onClick={okbutton}>Ok</button> 
            </div>:
            <div>
             <p><b>Id:</b> {props.id}<b> Status:</b> {props.completed ? 'Completed' : 'Incomplete'}<br/>{props.text}</p>
            </div>
            }
            <div>
                <button onClick={() => props.delete(props.id)}>Delete</button>
                <button onClick={() => updatebuttonconfig(true)}>Edit</button>
            </div>
            
        </div>
    );
}
