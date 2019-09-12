import * as axios from 'axios'

const getUsers = async function (){
    try {
        const response = await axios.get('https://swapi.co/api/people/')

        const users = response.data.results.map(m =>{
            m.name != null
            return m
        })
        return users
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        return []
    }
}

export const data = {
    getUsers,
}