import axios from "axios"

export const getRoots = async (req, res) =>{

    try {
        const result = await axios.get("https://37b2-2-44-90-143.ngrok-free.app/root", {
            headers: {
                'name': 'Salvatore Tosich',
                "key": "o4p5q6r7s8t9"
            }
        })
        const data = result.data.children[1].key

        const {treasure} = data
        
        res
        .send({
            result: data,
            tesoro: {treasure},
            message: "ok"
        }).status(200)
    } 
    catch (error) {
        res
        .send({
            message: "problemi con il server di alberto"
        }).status(404)

    }



}