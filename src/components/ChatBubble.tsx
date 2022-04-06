import React from "react";

interface ChatBubbleTypes {
  userIsSender: boolean;
  message: string;
  username: string;
}

function ChatBubble({ userIsSender, message, username }: ChatBubbleTypes) {
  if (userIsSender)
    return (
      <div className="flex max-w-[80%] gap-3 ml-auto">
        <p className="bg-gray-800 text-white text-sm p-2 rounded-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At consequat
        </p>
        <div className="w-[20%]">
          <div className="w-7 h-7 flex justify-center items-center rounded-full bg-gray-800 text-white">
            <p>S</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex max-w-[80%] gap-3">
      <div className="w-[20%]">
        <div className="w-7 h-7 flex justify-center items-center rounded-full bg-yellow-800 text-white">
          <p>{username[0]}</p>
        </div>
      </div>

      <p className="bg-blue-800 text-white text-sm p-2 rounded-lg">{message}</p>
    </div>
  );
}

export default ChatBubble;
