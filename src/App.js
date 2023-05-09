import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import CreateTask from './components/CreateTask';
import './App.css';


function App() {

    const dateTime = new Date().getTime()

    // useState stores the tasks in memory and provides the function setTasks to update them
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            date: dateTime,
            completed: true
        },
        {
            title: "Do your workout",
            date: dateTime,
            completed: true
        },
        {
            title: "Hangout with friends",
            date: dateTime,
            completed: false
        }
    ]);

    // This line below runs every time the tasks change, you will learn more
    // about this later in Module 9
    useEffect(() => { 
        console.log(tasks)
        //setTasksRemaining(tasks.filter(task => !task.completed).length) 
    },[tasks]);


    const addTask = title => {
        const newTasks = [...tasks, { title: title, date: new Date().getTime(), completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        // remove task here
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
            {/* Display the Numer of Completed and Remaining Tasks here */}
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default App;