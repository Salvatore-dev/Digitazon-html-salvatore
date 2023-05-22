export default function Home() {


    const [idPost, setIdPost] = useState([])

    useEffect(() => {
        //effettuo la chiamata al server esterno per la navbar
        async function getId() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json = await res.json()
            const cutJson = json.slice(0, 5)
            setIdPost(cutJson)
        }
        getId()
    }, [])
    return (
        <div className="home">
            <div className="navbar">
                <ul>
                    {idPost.map((e, i) => (
                        <li key={e.id}><Link to={i==0 ? `/` : `/post/${e.id}`}><h2>Post {e.id}</h2></Link></li>
                    ))}
                </ul>
            </div>
            <div className="body"></div>
            <Outlet />
        </div>
    );
}