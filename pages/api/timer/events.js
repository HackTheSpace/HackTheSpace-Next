import { kv } from "@vercel/kv";

export default async function setHandler(request, response) {
  if (request.method === "POST") {
    const { currentEvent, nextEvent } = request.body;
    const data = await kv.set("event", { currentEvent, nextEvent });
    return response.status(200).json(data);
  } else if (request.method === "GET") {
    const data = await kv.get("event");
    return response.status(200).json(data);
  } else {
    return response
      .status(405)
      .json({ error: { message: "Method not allowed" } });
  }
}
