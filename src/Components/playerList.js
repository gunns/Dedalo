import React, { Component } from 'react'
import { PlayerRow } from './playerRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class PlayerList extends Component {

    render() {
        return (
            this.props.players.map(player =>
                <Card key={'card' + player.nombre}>
                    <CardContent key={'content' + player.nombre}>
                        <PlayerRow player={player} key={player.nombre} />
                    </CardContent>
                </Card>
                
            )
        )
    }

}