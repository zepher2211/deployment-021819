import React from 'react'
import DragonCard from './DragonCard'

export default class Peace extends React.Component {
    
    render(){
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>Home</h1>
                {this.props.dragonsAtHome.map( dragon => (
                    <DragonCard 
                        key={dragon.id}
                        {...dragon}
                        shiftDragon={this.props.shiftDragon}
                        // id={dragon.id}
                        // name={dragon.name}
                        // description={dragon.description}
                        // image={dragon.image}
                        // atWar={dragon.atWar}
                    />
                ))}
            </div>
        )
    }

}