interface chatBubbleprops {
  message: string;
  sender: string;
  isBot: boolean;
}

const ChatBubble: React.FC<chatBubbleprops> = (props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center m-2 p-2 rounded-xl shadow-sm h-fit w-fit ${
        props.isBot ? "bg-blue-300" : "bg-pink-300"
      }`}
    >
      <h3>{props.message}</h3>
      <div className="flex justify-end w-full">
        <span
          className={`text-sm ${
            props.sender == "bot" ? " text-pink-300 " : " text-blue-20 "
          } font-bold `}
        >
          {props.sender}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
