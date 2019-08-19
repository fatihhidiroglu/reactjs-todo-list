import React, { Component } from 'react';


class Giris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sUser: {
                kid: "",
                userName: ""
            }
        }
    }
    onKullaniciChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState(prevState => {
            let sUser = Object.assign({}, prevState.sUser);
            sUser[name] = value;
            return { sUser };
        })
    }
    userSubmit(e) {
        const { userSearch } = this.props;
        userSearch(this.state.sUser);
        e.preventDefault();
    }
    render() {
        return (
            <div className="panel panel-default col-sm-2 col-md-2 col-lg-2">
                <div className="panel-heading text-center">
                    <button data-toggle="collapse" data-target="#giris" className="btn btn-info"><i className="fas fa-user-check"></i>
                        Kullanıcı Sorgula
                    </button>
                </div>
                <div id="giris" className="collapse">
                    <div className="panel-body">
                        <form onSubmit={this.userSubmit.bind(this)}>
                            <div className="form-group">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fas fa-user-circle"></i></span>
                                        <input type="text" className="form-control" name="userName" id="userName" placeholder="Kullanıcı Adı"
                                            onChange={this.onKullaniciChange.bind(this)} required
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <button type="submit" className="btn btn-success btn-block btn-sorgula"><i className="fa fa-search fa-sm"
                                        aria-hidden="true"></i>Sorgula
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
export default Giris;