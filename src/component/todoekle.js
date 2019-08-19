import React, { Component } from 'react';
import './todoekle.css';
class Olustur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                kid: "",
                id: "",
                Title: "",
                TODO: "",
                Dates: ""
            }
        }
        this.baseState = this.state; 
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            todo: newProps.isEditing === true && newProps.todo,
        })
    }
    onTitleChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        this.setState(prevState => {
            let todo = Object.assign({}, prevState.todo);
            todo[name] = value;
            return { todo };
        });
    }
    onTODOChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        this.setState(prevState => {
            let todo = Object.assign({}, prevState.todo);
            todo[name] = value;
            return { todo };
        })
    }
    onDateChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        this.setState(prevState => {
            let todo = Object.assign({}, prevState.todo);
            todo[name] = value;
            return { todo };
        });
    }
    resetForm(e) {
        this.setState(this.baseState );   
        const { formReset } = this.props;
        formReset();     
        e.preventDefault();
    }

    onAddSubmit(e) {
        const { addTODO } = this.props;
        const {
            kid,
            id,
            Title,
            TODO,
            Dates
        } = this.state.todo;
        const newTODO = {
            kid: kid,
            id: id,
            Title: Title,
            TODO: TODO,
            Dates: Dates
        };
        addTODO(newTODO);
        e.preventDefault();
    }
    render() {
        const {
            Title,
            TODO,
            Dates
        } = this.state.todo;
        return (
            <div className="panel panel-default col-sm-3 col-md-3 col-lg-3">
                <div className="panel-heading text-center">
                    <button data-toggle="collapse" data-target="#olustur" className="btn btn-info"><i className="fas fa-edit"></i>
                        TODO Oluştur
                    </button>
                </div>
                <div id="olustur" className="collapse">
                    <div className="panel-body">
                        <form onSubmit={this.onAddSubmit.bind(this)} onReset={this.resetForm.bind(this)} >
                            <div className="form-group">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-thumbtack"></i></span>
                                        <input type="text" className="form-control" placeholder="Title" name="Title" id="title" value={Title || ''}
                                            onChange={this.onTitleChange.bind(this)} required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-tasks"></i></span>
                                        <input type="text" className="form-control" placeholder="TODO" name="TODO" id="todo" value={TODO || ''}
                                            onChange={this.onTODOChange.bind(this)} required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                                        <input type="date" className="form-control" placeholder="Date" name="Dates" id="date" value={Dates || ''}
                                            onChange={this.onDateChange.bind(this)} required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <button type="submit" className="btn btn-success btn-ekle">
                                        <i className="fa fa-plus-circle fa-sm" aria-hidden="true"></i>
                                        {
                                            this.props.isEditing ? "Güncelle" : "Ekle"
                                        }
                                    </button>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <button type="reset" className="btn btn-danger btn-ekle">
                                        <i className="fas fa-broom fa-sm"></i>
                                        Temizle
                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
export default Olustur;