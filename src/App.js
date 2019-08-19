import React, { Component } from 'react';
import Giris from './component/giris';
import Liste from './component/liste';
import './App.css';
import Olustur from './component/todoekle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      ],
      todo:
      {
        kid: "",
        id: "",
        Title: "",
        TODO: "",
        Dates: ""
      },
      users: [
      ],
      findingUser: {
        kid: "",
        userName: ""
      },
      response: {},
      isEditing: false,
      isAdd: false
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.addTODO = this.addTODO.bind(this);
    this.userSearch = this.userSearch.bind(this);
    this.formReset = this.formReset.bind(this);
  }
  addTODO(newTODO) {
    newTODO.kid = this.state.findingUser.kid;
    const todoAdding = {
      kid: newTODO.kid,
      Title: newTODO.Title,
      TODO: newTODO.TODO,
      Dates: newTODO.Dates
    }
    var formBody = [];
    for (var property in todoAdding) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(todoAdding[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let apiUrl = "//localhost:8080/todo";
    let method = "POST";
    if (this.state.isEditing) {
      apiUrl = "//localhost:8080/todo/" + newTODO.id;
      method = "PUT";
    }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    const options = {
      method: method,
      body: formBody,
      headers: myHeaders
    };
    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        fetch("//localhost:8080/kullanici/" + this.state.findingUser.kid)
          .then(res => res.json())
          .then(
            (result) => {
              if (method === 'POST')
                this.setState({
                  todos: result,
                  todo: result[result.length - 1],
                  isEditing: true,
                });
              else
                this.setState({
                  todos: result,
                  todo: newTODO,                                   
                });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      },
        (error) => {
          this.setState({ error });
        }
      )
  }
  deleteTodo(id) {
    const apiUrl = "//localhost:8080/todo/" + id;
    const formData = new FormData();
    formData.append('id', id);
    const options = {
      method: 'DELETE',
      body: formData
    }
    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          fetch("//localhost:8080/kullanici/" + this.state.findingUser.kid)
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  todos: result
                });
              },
              (error) => {
                this.setState({
                  error
                });
              }
            )
        },
        (error) => {
          this.setState({ error });
        }
      )
  }
  editTodo(id) {
    let updatedTODO = this.state.todos;
    updatedTODO = updatedTODO.filter(x => x.id === id);
    this.setState({
      todo: updatedTODO[0]
    });
    this.setState({
      isEditing: true
    })
  }
  formReset() {
    this.setState({
      todo:
      {
        kid: "",
        id: "",
        Title: "",
        TODO: "",
        Dates: ""
      }, isEditing: false
    });
  }
  userSearch(newUser) {
    fetch("//localhost:8080/kullanici")
      .then(res => res.json())
      .then(
        (result) => {
          let user = result.filter(x => x.userName === newUser.userName)[0];
          if (user) {
            fetch("//localhost:8080/kullanici/" + user.kid)
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    todos: result,
                    findingUser: user
                  });
                },
                (error) => {
                  this.setState({
                    error
                  });
                }
              )
          }
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render() {
    if (this.state.findingUser.userName !== "") {
      let userTodos = this.state.todos.filter(x => x.kid == this.state.findingUser.kid);
      return (
        <div className="container">
          <Giris userSearch={this.userSearch} />
          <Olustur
            addTODO={this.addTODO}
            todo={this.state.todo}
            isEditing={this.state.isEditing}
            findingUser={this.state.findingUser}
            formReset={this.formReset}
          />
          <Liste
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            todos={userTodos}
            findingUser={this.state.findingUser}
          />
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <Giris userSearch={this.userSearch} />
        </div>
      );
    }
  }
}
export default App;
