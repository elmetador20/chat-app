
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
const api_key = process.env.USER_KEY;
const api_secret = process.env.USER_SECRET;

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
 const user=await request.json()
  const token=serverClient.createToken(user.data.id);
    const client=await clerkClient()
  console.log("a new user has been created", token)
  await client.users.updateUserMetadata(user.data.id,{
    publicMetadata:{
      token:token
    }
  })

  return Response.json({ message: 'Hello World' })
}