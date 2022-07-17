import React from 'react';
import CreateTodo from '../components/ToDo/CreateTodo';
import TodoList from '../components/ToDo/TodoList';
import "./TodoPage.css";
const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>My Todo App</h4>
                        </div>
                        <div className="card-body">
                            <CreateTodo></CreateTodo>
                            <TodoList></TodoList>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default TodoPage;