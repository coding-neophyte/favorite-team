import React, { Component } from 'react'
import { deleteTeam, getTeam, updateTeam } from './utils.js';
import { getConference } from './utils.js';

export default class EditPage extends Component {
    state = {
        name: '',
        city: '',
        logo: '',
        championships: 0,
        category_name: '',
        category_id: 1,
        categories: []
    };

    componentDidMount = async () => {
        const editTeam = await getTeam(this.props.match.params.id);
        const editConference = await getConference()
        this.setState({ ...editTeam, categories: editConference })

    }

    HandleDelete = async (id) => {
        await deleteTeam(id);
        this.props.history.push('/');
    }

    submitTeam = async (e) => {
        e.preventDefault()
        await updateTeam(this.state, this.props.match.params.id);
        this.props.history.push('/')
    }



    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.submitTeam}>
                    <h1>Edit Your Team </h1>
                    <label>
                        Team Name:
                        <input onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} placeholder="Insert Team Name" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Team City:
                        <input onChange={(e) => this.setState({ city: e.target.value })} value={this.state.city} placeholder="Insert Team City" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Team Logo:
                        <input onChange={(e) => this.setState({ logo: e.target.value })} value={this.state.logo} placeholder="Insert Image URL" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Number of Chips:
                        <input onChange={(e) => this.setState({ championships: Number(e.target.value) })} value={this.state.championships} placeholder="Insert # Championships Won" />
                    </label>
                    <br />
                    <br />
                    <label>
                        Conference:
                        <select onChange={(e) => this.setState({ category_id: Number(e.target.value) })}>
                            {this.state.categories.map(category => <option selected={category.id === this.state.category_id} value={category.id}> {category.category_name} </option>)}
                        </select>
                    </label>
                    <br />
                    <br />
                    <button className="edit">Update</button>
                    <button onClick={() => this.HandleDelete(this.props.match.params.id)} className="edit">Delete</button>
                </form>
            </div>
        )
    }
}
