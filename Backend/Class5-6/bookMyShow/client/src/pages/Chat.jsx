import { useEffect } from "react";
import { socket } from "../App";

const Chat = () => {
    useEffect(() => {
        socket.on('message', ()=> {

        })
    }, []);

    return(
        <div>
            <h1>Chat Group</h1>
        </div>
    )
}

export default Chat;