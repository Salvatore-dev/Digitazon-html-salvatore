import { useState, useEffect } from "react"

function Boardimput({ params }) {
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')


  function sendMessage() {
    params(user, message)
  }

  return (
    <div className="board">
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder="User"
      />
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
};

function Message() {
  const [messages, setMessages] = useState([])

  function oneMessage(user, message) {
    const newMessage = [...messages]
    newMessage.push({ user, message })
    setMessages(newMessage)
  }
  return (
    <div className="window">
      <ol>
        {messages.map((el) => (
          <li>{el.user} : <span>{el.message}</span></li>
        ))}
      </ol>

      <Boardimput params={oneMessage} />
    </div>
  );
}

export function Chat() {
  return (
    <div>
      <h1>Chat</h1>
      <Message />
    </div>
  )
}