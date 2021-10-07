import React, { Component } from 'react'
import request from 'superagent';
import './App.css'
import { getConference } from './utils';

export default class CreateTeam extends Component {

    state = {
        name: '',
        city: '',
        logo: '',
        championships: '',
        category_name: '',
        category_id: 1,
        categories: []

    };

    componentDidMount = async () => {
        const conference = await getConference()

        this.setState({ categories: conference })
    }

    submitTeam = async (e) => {
        e.preventDefault();
        await request.post('https://db-lab-julius.herokuapp.com/basketball-teams')
            .send({
                name: this.state.name,
                city: this.state.city,
                logo: this.state.logo,
                championships: this.state.championships,
                category_name: this.state.category_name,
                category_id: this.state.category_id

            })
        this.props.history.push(`/`) // links back to home page
    };
    handleName = (e) =>
        this.setState({ name: e.target.value })


    handleCity = (e) =>
        this.setState({ city: e.target.value })


    handleLogo = (e) =>
        this.setState({ logo: e.target.value })

    handleChampionships = (e) =>
        this.setState({ championships: e.target.value })


    handleCategory = (e) =>
        this.setState({ category_id: Number(e.target.value) })






    render() {
        console.log(this.state)
        return (
            <div className="team-create">
                <form onSubmit={this.submitTeam}>
                    <h1>Insert Your Favorite Team </h1>
                    <label>
                        Team Name:
                        <input onChange={this.handleName} placeholder="Insert Team Name" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Team City:
                        <input onChange={this.handleCity} placeholder="Insert Team City" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Team Logo:
                        <input onChange={this.handleLogo} placeholder="Insert Image URL" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Number of Chips:
                        <input onChange={this.handleChampionships} placeholder="Insert # Championships Won" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Conference:
                        <select onChange={this.handleCategory}>
                            {this.state.categories.map(category => <option value={category.id}> {category.category_name} </option>)}
                        </select>
                    </label>
                    <br />
                    <br />
                    <button className="submit">Submit</button>
                </form>
            </div >
        )
    }

}
