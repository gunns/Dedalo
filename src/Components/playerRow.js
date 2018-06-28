import React, {Component} from "react"

export class PlayerRow extends Component{
    constructor(props){
        super(props)
        this.state= {nombre: '' , ataque: 0, defensa:0}
    }
    render(){
        return(
            <div className="inline">
                {"Nombre"}
                {this.props.player.nombre}
                &br;
                {"Ataque"}
                {this.props.player.ataque}
                &br;
                {"Defensa"}
                {this.props.player.defensa}
            </div>
        )
    }
}