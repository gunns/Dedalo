import {Jugador} from "./Jugador"
import {Equipo} from "./Equipo"

export class Organizador{
    constructor(){
        this.equipoA = new Equipo(1)
        this.equipoB = new Equipo(2)
        this.playersToSort = []
    }


    addPlayerToSort(_attack,_defense){
        this.playersToSort.push(new Jugador(_attack,_defense))
    }

    sort(){
        if (this.playersToSort.length < 10 || !this.playersToSort.length%2) {
            throw new console.error("no se puede organizar un juego con menos de 10 jugadores o cantidad de jugadores impares");
        } else{
            this.playersToSort = this.playersToSort.sort((a,b)=> (a.attack+a.defense)- (b.attack+b.defense))
        }
        while (playersToSort.length > 2){
            this.equipoA.addPlayer(this.playersToSort.pop)
            this.equipoB.addPlayer(this.playersToSort.pop)
        }
        this.equipoB.addPlayer(this.playersToSort.pop)
        this.equipoA.addPlayer(this.playersToSort.pop)
    }
}