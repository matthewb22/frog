import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
import './App.css';


function App() {

    // useState stores tasks as an Array of Objects in memory 
    // and provides the function setTasks to update the Array
    // Challenge 1 - create a tasksRemaining variable to the stored in this Component's State
    // Challenge 3 - add your dates into these objects
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    // This line below runs every time the tasks change, you will learn more
    // about this later in Module 9
    // Challenge 1 - uncomment this line to see how the code works
    useEffect(() => { 
        //setTasksRemaining(tasks.filter(task => !task.completed).length) 
    },[tasks]);


    const addTask = title => {
        const newTasks = [...tasks, { title: title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        // Challenge 2 : write the code for remove task here
    };

    return (
        <div className="todo-container">
            <div className="header">Todos</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                    ))}
            </div>
            {/* Challenge 1 - Display the Numer of Completed and Remaining Tasks here */}
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default App;