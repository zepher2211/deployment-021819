import React from 'react'
import DragonCard from './DragonCard'

export default class War extends React.Component {
    
    render(){
        return (
            <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
                <h1 >War</h1>
                {this.props.dragonsAtWar.map( dragon => (
                    <DragonCard 
                        key={dragon.id}
                        shiftDragon={this.props.shiftDragon} 
                        {...dragon}
                    />
                ))}
            </div>
        )
    }

}