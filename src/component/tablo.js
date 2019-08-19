import React, { Component } from 'react';

class Tablo extends Component {
    todoSil(id, e) {
        const { deleteTodo } = this.props;
        deleteTodo(id);
    };
    todoDuzenle(id, e) {
        const { editTodo } = this.props;
        editTodo(id);
    };
    render() {
        const {
            id,
            Title,
            TODO,
            Dates
        } = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{Title}</td>
                <td>{TODO}</td>
                <td>{Dates}</td>
                <td><button className="btn btn-primary " onClick={this.todoDuzenle.bind(this, id)}>
                    <i className="fa fa-pencil fa-sm" aria-hidden="true"></i></button>
                </td>
                <td><button className="btn btn-danger col-sm-8 col-md-8 col-lg-8" onClick={this.todoSil.bind(this, id)}>
                    <i className="fa fa-trash-o fa-sm" aria-hidden="true"></i></button>
                </td>
                {/* <td>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal" >
                        <i className="fa fa-trash-o fa-sm" aria-hidden="true"></i>
                    </button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog  modal-sm">
                            <div className="container">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">TODO SİL</h4>
                                    </div>
                                    <div className="modal-body text-center">
                                        <p>TODOyu silmek istiyor musunuz ?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default col-sm-5 col-md-5 col-lg-5 " data-id={id} data-dismiss="modal" 
                                            onClick={this.todoSil.bind(this, id)}><i className="fas fa-check-circle fa-sm"></i>Evet
                                        </button>
                                        <button type="button" className="btn btn-warning col-sm-5 col-md-5 col-lg-5" data-dismiss="modal">
                                        <i className="fas fa-times-circle fa-sm"></i>Hayır
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td> */}
            </tr >
        );
    }
}

export default Tablo;