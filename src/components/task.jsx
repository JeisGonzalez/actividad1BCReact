import React from 'react';
import PropTypes from 'prop-types';
import { Task } from './task.class';

const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: { task.nombre }
            </h2>
            <h2>
                Apellido: { task.apellido }
            </h2>
            <h2>
                Email: { task.email }
            </h2>
            <h2>
                Conectado: { task.conectado ? "Contacto En Línea":"Contacto No Disponible" }
            </h2>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
