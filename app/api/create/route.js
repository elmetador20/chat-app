
import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
const api_key = "f9aeef7m7muq";
const api_secret = "2yb6x6wfu57cdj7jjwwhxtu9ht479v5jybkveedccav4kwqe6rzm2kjm4sf98rjx";
//const user_id="user_30SwoIz844W7tpm6qwWTw0oWqT2";
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