import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import './App.css'

export default class TeamPage extends Component {
    state = {
        teams: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://db-lab-julius.herokuapp.com/basketball-teams/')
        this.setState({ teams: response.body })
    }
    render() {
        console.log(this.state.teams)
        return (
            <div className="team-div">

                {this.state.teams.map((team) => <div className="teamInfo">
                    <Link to={`/edit/${team.id}`}>
                        <img src={team.logo} alt={team.name}></img>
                        <br />
                        <p> {team.name}</p>
                        <br />
                        City: {team.city}
                        <br />
                        Championships: {team.championships}
                        <br />
                        Conference: {team.category_name}
                    </Link>
                </div>)}

            </div>
        )
    }
}
