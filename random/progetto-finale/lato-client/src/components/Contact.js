import { useEffect, useState } from 'react';



const Contact = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        async function FechtUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await res.json()
            setUsers(json.splice(0, 7))

        }
        FechtUsers()
    }, [])
    return (

        <>
            <h1>Contact Me</h1>;
            <div className='users' />

            {users.map((user) => (
                <div className='user'>
                    <p><h5>Nome: </h5>{user.name}</p>
                    <p><h5>Username: </h5>{user.username}</p>
                    <p><h5>Email:</h5> <a href={user.email} >{user.name}</a></p>
                    <p><h5>Indirizzo: </h5>{user.address.street}, {user.address.suite}, {user.address.city}</p>
                </div>
            ))}
        </>
    )



};

export default Contact;