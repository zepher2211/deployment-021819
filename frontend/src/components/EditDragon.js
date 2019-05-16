import React from 'react'

export default class EditDragon extends React.Component {

    state = {

    }

    componentDidMount(){
        let id = this.props.match.params.id
        fetch(`http://localhost:3001/dragons/${id}`)
            .then( res => res.json() )
            .then( dragon => this.setState( dragon ))
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckbox = e => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    handleSubmit =  e => {
        e.preventDefault()
        let id = this.props.match.params.id
        fetch(`http://localhost:3001/dragons/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then( res => res.json() )
            .then( dragon => this.setState( dragon ))
    }

    render(){
        //console.log(this.props.location.state)
        const { name, image, atWar } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Edit Dragon</h1>
                <div>
                    <label>Name</label>
                    <input name="name" value={name} type='text' onChange={this.handleChange} />
                </div>
                <div>
                    <label>Image</label>
                    <input name="image" value={image} type='text' onChange={this.handleChange} />
                </div>
                <div>
                    <label>At War</label>
                    <input name="atWar" checked={atWar} type='checkbox' onChange={this.handleCheckbox} />
                </div>
                <input type="submit" />
            </form>
        )
    }

}