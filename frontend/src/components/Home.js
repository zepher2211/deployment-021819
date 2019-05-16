import React from 'react'
import Peace from "./Peace";
import War from "./War";

class Home extends React.Component {

    state = { 
      dragons: []
    }
  
    shiftDragon = (id) =>{
      this.setState({
        dragons: this.state.dragons.map( dragon =>{
          if(dragon.id === id){
            this.saveDragon({ ...dragon, atWar: !dragon.atWar })
            return { ...dragon, atWar: !dragon.atWar }
          } else {
            return dragon
          }
        })
      })
    }
  
    componentDidMount(){
      fetch('http://localhost:3001/dragons')
        .then( res => res.json() )
        .then( dragons => {
          console.log(dragons)
          this.setState({ 
            dragons: dragons
          })
        })
    }

    saveDragon(dragon){
      fetch(`http://localhost:3001/dragons/${dragon.id}`, {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(dragon)
      })
    }
  
  
    render(){
      let dragonsAtHome = this.state.dragons.filter( dragon => !dragon.atWar )
      let dragonsAtWar = this.state.dragons.filter( dragon => dragon.atWar )
      return (
        <div>
          <Peace dragonsAtHome={dragonsAtHome} shiftDragon={this.shiftDragon}/>
          <War dragonsAtWar={dragonsAtWar} shiftDragon={this.shiftDragon}/>
        </div>
      );
    }
  
  }

  export default Home