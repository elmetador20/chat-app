import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  
  const body = await request.json();
  const id = body?.id;

  if (!id) {
    return new Response(JSON.stringify({ error: "User ID is missing" }), {
      status: 400,
    });
  }

  const token = serverClient.createToken(id);

  console.log("A new user has been created:", token);

  await clerkClient.users.updateUserMetadata(id, {
    publicMetadata: {
      token: token,
    },
  });

  return Response.json({ message: "Token created and stored", token });
}
