import React, { Component } from 'react'
import { PlayerList } from './playerList'
import { Jugador } from '../Domain/Jugador'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

export class PlayerSearch extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            search: new Jugador(),
        }
    }

    handleChange(property, event) {
        event.preventDefault()
        const search = this.state.search
        search[property] = event.target.value
        this.setState({
            search: search,
        })
    }

    render() {
        return (
            <div>
                <div className="search">
                    <FormControl className="formControl">
                        <FormHelperText>Nombre</FormHelperText>
                        <TextField
                            id="Nombre"
                            value={this.state.search.name}
                            onChange={this.handleChange.bind(this, 'name')}
                        />
                        <br/>
                    </FormControl>
                </div>
                <PlayerList players={this.state.countries} />
            </div>
        )
    }

}