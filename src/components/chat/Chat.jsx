import EmojiPicker from 'emoji-picker-react';
import './chat.css'
import { useState } from 'react';
const Chat = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [textMessage, setTextMessage] = useState("")
  function handleEmoji(e) {
    setTextMessage(prev => prev + e.emoji)
  }
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>jane Doe</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              nobi
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              dolore laborum dolor, est itaque, nostrum libero at, quas quod
              ipsam blanditiis suscipit voluptas cum quibusdam inventore? Fuga,
              doloremque temporibus. Ducimus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              dolore laborum dolor, est itaque, nostrum libero at, quas quod
              ipsam blanditiis suscipit voluptas cum quibusdam inventore? Fuga,
              doloremque temporibus. Ducimus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="emoji-picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}
export default Chat