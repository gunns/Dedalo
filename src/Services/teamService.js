import {Equipo} from "../Domain/Equipo"

const teams = [
    new Equipo('Equipo 1'),
    new Equipo('Equipo 2')
]


export class TeamService {

    getTeams(){
        return teams
    }

    getTeam(_indx){
        return teams.filter(team=> team.hasName(_indx))
    }
}