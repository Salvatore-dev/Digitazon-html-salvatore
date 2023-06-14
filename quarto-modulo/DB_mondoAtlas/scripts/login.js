import axios from 'axios'

async function login() {
    const res = await axios.post('http://localhost:3000/users/session', {
        username: 'chandraSaur',
        password: 'ciao123'
    })
    console.log(res.status, res.data);
    console.log(res.headers['set-cookie'][0].split(';')[0])
}
//login()

async function signUp() {
    const res = await axios.post('http://localhost:3000/users/signup', {
        username: 'chandraSaur',
        password: 'ciao123'
    })
    console.log(res.status, res.data);
}
signUp()