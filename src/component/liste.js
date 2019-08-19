import React, { Component } from 'react';
import Tablo from './tablo';
import './liste.css';
class Liste extends Component {

    render() {
        const {
            todos,
            deleteTodo,
            editTodo
        } = this.props;
        return (
            <div className = "panel panel-default col-sm-6 col-md-6 col-lg-6 ">
                <div className = "panel-heading text-center">
                    <button data-toggle = "collapse" data-target = "#liste" className = "btn btn-info"><i className = "fas fa-list-ul"></i>
                        TODO List
                    </button>
                </div>

                <div id = "liste" className = "collapse">
                    <div className = "panel-body">
                        <div className = "table-responsive">
                            <table className = "table table-hover">
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>Title</th>
                                        <th>TODO</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map(x => {
                                            const {
                                                kid,
                                                id,
                                                Title,
                                                TODO,
                                                Dates
                                            } = x
                                            return <Tablo 
                                                        key = { id } 
                                                        kid = { kid }
                                                        id = { id } 
                                                        Title = { Title } 
                                                        TODO = { TODO } 
                                                        Dates = { Dates } 
                                                        deleteTodo = { deleteTodo }
                                                        editTodo = { editTodo }                                                                             
                                                    />;
                                                    
                                        })
                                    }                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Liste;