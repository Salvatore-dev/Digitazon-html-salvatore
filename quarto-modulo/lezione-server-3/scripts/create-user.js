import axios from 'axios'

async function call() {
  let res = await axios.post('http://localhost:3000/users', {
    name: 'John',
    surname: 'White'
  })
  console.log(res.status, res.data)
}

call()
