import { useState } from "react";
import TodoItem from "./todoitem";
import './todo.css';

export default function TodoList(){
    const [field ,changefield] = useState('');
    const [status ,setstatus] = useState(true);
    const [todo ,settodo] = useState([

    ]);
    function addTask(field){
        if(field !== '') {
            const newtask = {
                id : Math.floor(Math.random() * 100)*Math.floor(Math.random() * 100),
                text : field,
                completed : status
            }
            settodo([...todo, newtask])
        }
        else {
            alert("Task should not be Empty")
        }
    }
    function checkstatus(option){
        if (option === 'Completed')
            setstatus(true);
        else
            setstatus(false);
    }
    function deleteTask(delid){
        settodo(todo.filter(task => delid !== task.id))
    }
    function alterContent(alter, altertext, alterstatus){
        /*for(let x in todo){
            if(alter == todo[x].id){
                todo[x].completed = alterstatus;
                todo[x].text = altertext;
                console.log(altertext);
                console.log(alterstatus);
                settodo(todo);
            }
        }*/
        const updatedtodos = todo.map(task => {
            if(task.id === alter) {
                return { ...task, text: altertext, completed: alterstatus };
            }
            return task;
        });
        settodo(updatedtodos);
    }
    return(
        <div>
            <div id = "todoask">
                <label for="task">Enter Task : </label>
                <input type="text" id="task" onChange={(e) => changefield(e.target.value)}></input>
                <label for="task">Status :  </label>
                <select onChange={(e) => checkstatus(e.target.value)}>
                    <option>Completed</option>
                    <option>Not Completed</option>
                </select>
                <button onClick={() => addTask(field)}>Add Task</button>
            </div>
            <div id="todoelement">
                {
                todo.length === 0 ? (<h2>No Task Yet</h2>) : (
                todo.map( (item) => {
                    console.log(item);
                    return(
                        <TodoItem id={item.id} text={item.text} completed={item.completed} delete={deleteTask} alterContent={alterContent} />)}) )
                }
            </div>
        </div>    
    );
}