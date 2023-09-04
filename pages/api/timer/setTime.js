import { kv } from "@vercel/kv";

export default async function setHandler(request, response) {
  if (request.method !== "POST") {
    return response
      .status(405)
      .json({ error: "Method not allowed, please use POST" });
  }

  const { type, time } = request.body;
  const user = await kv.set(type, time);
  return response.status(200).json(user);
}
