import React, { useState } from 'react';
import TaskComponent from "./task";
import { Task } from "./task.class";

const TaskListComponent = () => {

    let [state, setstate] = useState(true);
    const change = () => {
        setstate(state = !state);
    }

    const defaultTask = new Task("User", "Example", "@gmail.com", state)

    return (
        <div>
            <h1>Prueba</h1>
            <TaskComponent task={defaultTask}></TaskComponent>
            <div>
                <button onClick={change}>
                    Cambiar estado
                </button>
            </div>
        </div>
    );
};

export default TaskListComponent