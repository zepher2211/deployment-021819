import React from 'react';
import Home from './components/Home'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditDragon from './components/EditDragon';

// Making an Authenticated Request

// fetch('http://localhost:3000/dragons', {
//  headers: {
// 		Authorization: `Bearer ${localStorage.getItem('token')}`
//  }
// })
// 	.then( res => res.json())
// 	.then(console.log)

class Login extends React.Component {

  state = {
    name: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    })
      .then( res => res.json())
      .then( user => {
        localStorage.setItem('token', user.auth_token)
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 render(){
   return (
     <form>
       <label>Name</label>
       <input onChange={this.handleChange} name="name" type="text" />
       <label>Password</label>
       <input onChange={this.handleChange} name="password" type="text" />
       <input type="submit" onClick={this.handleSubmit} />
     </form>
   )
 }
}


class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/edit-dragon/:id" component={EditDragon} />
            <Route path="/login" component={Login}/>
            <Route path="/" component={Home}/>

        </Switch>
      </BrowserRouter>
    )
  }

}


export default App;
