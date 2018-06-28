export class Equipo{

    constructor(_name){
        this.name = _name
        this.players = []
    }

    addPlayer(_player){
        this.players.push(_player)
    }
    
    hasName(_n){
        return this.name.includes(_n)
    }

}