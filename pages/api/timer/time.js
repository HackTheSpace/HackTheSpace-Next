import { kv } from "@vercel/kv";

export default async function setHandler(request, response) {
  if (request.method === "GET") {
    const user = await kv.get("time");
    return response.status(200).json(user);
  } else if (request.method === "POST") {
    const { type, time } = request.body;
    const user = await kv.set(type, time);
    return response.status(200).json(user);
  } else {
    return response
      .status(405)
      .json({ error: { message: "Method not allowed" } });
  }
}
