import * as axios from 'axios'

const getUsers = async function (){
    try {
        const response = await axios.get('https://randomuser.me/api/?inc=name,location,picture&results=10')
        const users = response.data.map(m => {m.results.name != null})
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