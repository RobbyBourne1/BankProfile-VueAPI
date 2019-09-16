import * as axios from 'axios'

const getUsers = async function (){
    try {
        const response = await axios.get('https://randomuser.me/api/?inc=name,location,picture&results=20')

        const users = response.data.results.map(m =>{
            m.name.first != null
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