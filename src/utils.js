import request from "superagent";

const URL = 'https://db-lab-julius.herokuapp.com'
// const URL = 'http://localhost:7890'

export async function getTeams() {
    const response = await request.get(`${URL}/basketball-teams`)
    return response.body;
}

export async function getTeam(id) {
    const response = await request.get(`${URL}/basketball-teams/${id}`)
    return response.body;
}

export async function deleteTeam(id) {
    const response = await request.delete(`${URL}/basketball-teams/${id}`)
    return response.body;
}

export async function updateTeam(basketball, id) {
    console.log(id)
    const response = await request.put(`${URL}/basketball-teams/${id}`).send(basketball)
    console.log(response.body)
    return response.body;
}

export async function createTeam(body) {
    const response = await request.post(`${URL}/basketball-teams`).send(body)

    return response.body;
}

export async function getConference() {
    const response = await request.get(`${URL}/categories`)
    return response.body;
}
