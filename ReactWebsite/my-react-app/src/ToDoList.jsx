import { useState } from "react";
function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value)

    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i != index);
        setTasks(updatedTasks);

    }

    function addTask() {

        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }


    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <input id="task" type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
        <button className="add-button" onClick={addTask}>Add</button>

        <ol>
            {tasks.map((task, index) => <li key={index} >
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
            </li>)}
        </ol>



    </div>);

}

export default ToDoList