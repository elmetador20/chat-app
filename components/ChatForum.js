"use client";
import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_USER_KEY;

  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState(null);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client || !userId || !slug) return;

    const setupChannel = async () => {
      const newChannel = client.channel("messaging", slug, {
        image: "https://getstream.io/random_png/?name=react",
        name: `${capitalize(slug)} Discussion`,
        members: [userId],
      });

      await newChannel.watch();
      await newChannel.addMembers([userId]);
      setChannel(newChannel);
    };

    setupChannel();
  }, [client, slug, userId]);

  if (!client || !channel) return <div>Setting up chat...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
