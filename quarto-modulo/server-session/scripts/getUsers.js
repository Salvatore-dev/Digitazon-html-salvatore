import axios from 'axios'

async function getUsers() {
    let res = await axios.post('http://localhost:3000/users/session', {
        username: 'chandraSaur',
        password: 'ciao123'
    })
    const cookie = res.headers['set-cookie'][0].split(';')[0]

    res = await axios.get('http://localhost:3000/users', {
        headers: {
            Cookie: cookie
        }
    })
    console.log(res.data);

    // const res = await axios.get('http://localhost:3000/users', {
    //     headers: {
    //         Cookie: 'connect.sid=s%3AhdDv3FkWNt1IGHIXtwQkcYTy3LmPA1Ix.Wt9WgErqn4lv2XVwQ40Zw2u1AnH35bDAaxtrKdEUSD0'
    //     }
    // })
    // console.log(res.status, res.data);
}
getUsers()