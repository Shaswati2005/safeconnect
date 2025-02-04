import ChatBubble from "./ChatBubble";

interface Msg {
  text: string;
  isBot: boolean;
  sender: string;
}

interface ChatBoxProps {
  messages: Msg[];
}

const Chatbox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="h-3/4 w-full bg-blue-20  overflow-y-scroll scroll-smooth snap-mandatory">
      {messages.map((key, index) => (
        <div
          key={index}
          className={` flex w-full h-fit items-center ${
            messages[index].isBot ? " justify-start" : "justify-end"
          } `}
        >
          <ChatBubble
            message={messages[index].text}
            isBot={messages[index].isBot}
            sender={messages[index].sender}
          />
        </div>
      ))}
    </div>
  );
};

export default Chatbox;
